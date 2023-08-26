import {
  collection,
  getDocs,
  query,
  orderBy,
  updateDoc,
  doc,
  arrayUnion,
  addDoc,
} from "firebase/firestore";
import {
  ref,
  uploadBytes,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import initilizedFirebase from "./../api/init";

const collections = {
  MEMBERS: "members",
  GALLERIES: "galleries",
};

const { firestore, firebaseStorage } = initilizedFirebase;

const postComment = async (imageId, comment) => {
  const imageRef = doc(firestore, collections.GALLERIES, imageId);
  const commentPayload = {
    comment,
    created_at: new Date().toLocaleString(),
  };
  const response = await updateDoc(imageRef, {
    comments: arrayUnion(commentPayload),
  });
  return commentPayload;
};

const postImageDetails = async (imageDetails) => {
  const imageRef = collection(firestore, collections.GALLERIES);
  const { id } = await addDoc(imageRef, imageDetails);
  return id;
};

const uploadImage = async (file) => {
  const fileUpload = file.target.files[0];
  const storageRef = ref(firebaseStorage, "images/" + fileUpload.name);

  try {
    await uploadBytes(storageRef, file, { contentType: fileUpload.type });
  } catch (error) {
    console.log("Upload error", error);
  }
};

const getUploadedImageListOnce = async () => {
  try {
    const images = [];
    const galleriesCollection = collection(firestore, collections.GALLERIES);
    const queriedGalleriesCollection = query(
      galleriesCollection,
      orderBy("created_at")
    );
    const response = await getDocs(queriedGalleriesCollection);
    response.forEach((snapshots) => {
      const image = {
        id: snapshots.id,
        ...snapshots.data(),
      };
      images.push(image);
    });

    return images;
  } catch (e) {
    console.error("Error getting documents: ", e);
  }
};

const getAllUploadedImagesURL = async () => {
  const images = await getUploadedImageListOnce();
  const imageURLs = [];
  for (let i = 0; i < images.length; i++) {
    const url = await getUploadedImageURL(images[i].path);
    imageURLs.push({ ...images[i], url });
  }
  return imageURLs;
};

const getUploadedImageURL = async (path) => {
  const storageRef = ref(firebaseStorage, path);

  try {
    return await getDownloadURL(storageRef);
  } catch (error) {
    console.log("get error", error, path);
  }
};

const uploadImageResumeable = async (file, setImageURL, setUploadStatus) => {
  const metadata = {
    contentType: "image/*",
  };
  const fileUpload = file.target.files[0];
  const storageRef = ref(firebaseStorage, "images/" + fileUpload.name);
  const uploadTask = uploadBytesResumable(storageRef, fileUpload, metadata);
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      switch (snapshot.state) {
        case "paused":
          setUploadStatus("Upload is paused");
          break;
        case "running":
          const progress =
            Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          setUploadStatus("Upload is " + progress + "% done");
          break;
        default:
      }
    },
    (error) => {
      switch (error.code) {
        case "storage/unauthorized":
          break;
        case "storage/canceled":
          break;
        case "storage/unknown":
          break;
        default:
      }
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
        let uploadedImage = {
          path: `images/${fileUpload.name}`,
          url: downloadURL,
          comments: [],
          created_at: fileUpload.lastModifiedDate,
          type: fileUpload.type,
        };
        const id = await postImageDetails(uploadedImage);
        uploadedImage.id = id;
        setImageURL((existingURLs) => [...existingURLs, uploadedImage]);
        setUploadStatus("");
      });
    }
  );
};

const operation = {
  uploadImage,
  uploadImageResumeable,
  getAllUploadedImagesURL,
  postComment,
};

export default operation;
