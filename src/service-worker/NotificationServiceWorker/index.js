let serviceWorker = null;
let isSubscribed = false;
let serverPublicKey = "BHdd2PwLOsYaDQQOmqw_8KIIYOQYECWNlat0K8GScnytjV88e6Xifn0GMz7MbScAkxf_kVJhnp-0NrB_P4u6WHw";
let subscription = null;

const urlB64ToUint8Array = (base64String) => {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
};

const subscribeUser = async () => {
  const applicationServerKey = urlB64ToUint8Array(serverPublicKey);
  const currentSubscription = await serviceWorker.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: applicationServerKey
  });
  isSubscribed = true;
  subscription = currentSubscription
};

const unsubscribeUser = async () => {
  const currentSubscription = await serviceWorker.pushManager.getSubscription();
  if (subscription) {
    return currentSubscription.unsubscribe();
  }
  isSubscribed = true;
  subscription = null;
};

const checkSubscription = async () => {
  if (isSubscribed) {
    console.log('User IS subscribed.');
    const currentSubscription = await serviceWorker.pushManager.getSubscription();
    subscription = currentSubscription;
  } else {
    console.log('User is NOT subscribed.');
  }
};

const showNotification = async (title, options) => {
  await serviceWorker.showNotification(title, options);
};

const register = async () => {
  const currentServiceWorker = await navigator.serviceWorker.register('service-worker.js');
  console.log('Service Worker is registered', serviceWorker);
  serviceWorker = currentServiceWorker;

  const title = 'Push Codelab';
  const options = {
    body: 'aYay it works.',
    icon: 'images/icon.png',
    badge: 'images/badge.png'
  };
  await showNotification(title, options);
};

export {
  register,
  showNotification
}
