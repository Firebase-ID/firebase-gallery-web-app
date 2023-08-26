const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

const sanitizeString = (string) => {
  return string.replace(/[^a-zA-Z0-9 ]/g, "");
};

const removeFileExtensionPrefix = (filename) => {
  const splittedFilename = filename.split(".");
  splittedFilename.pop();
  return splittedFilename.join(" ");
};

exports.generateImageName = functions.firestore
  .document("galleries/{id}")
  .onCreate((snapshot) => {
    const { filename } = snapshot.data();
    const sanitizedFilename = sanitizeString(filename);
    const imageName = removeFileExtensionPrefix(sanitizedFilename);
    return snapshot.ref.update({ name: imageName });
  });

exports.onFileUploaded = functions.storage
  .object()
  .onFinalize(async (object) => {
    const filePath = object.name;
    return functions.logger.log(
      "File upload properties has been created successfully for ",
      filePath
    );
  });
