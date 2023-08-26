import { useState, useEffect } from "react";
import { Modal, Input } from "antd";

const { Search } = Input;

import operation from "../api";
import "./style.css";

const GalleryPage = () => {
  const [imagesURLs, setImagesURLs] = useState([]);
  const [uploadStatus, setUploadStatus] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(false);
  const [comments, setComments] = useState([]);
  const [inputComments, setInputComments] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const renderCommentItem = (comment, key) => (
    <div key={key} className="comment-item">
      <b>
        <p>{comment.created_at}</p>
      </b>
      <p>{comment.comment}</p>
    </div>
  );

  const renderInputComments = () => (
    <div>
      <Search
        placeholder="Post your comment"
        value={inputComments}
        onChange={(event) => setInputComments(event.target.value)}
        enterButton="Post"
        size="large"
        onSearch={async (comment, a) => {
          const commentResponse = await operation.postComment(
            selectedImage.id,
            comment
          );
          setComments((comment) => [...comment, commentResponse]);
          setInputComments("");
        }}
      />
    </div>
  );

  const pickFilename = (directory) => {
    const splittedWord = directory.split("/");
    return splittedWord[splittedWord.length - 1];
  };

  const getFilenameWithoutType = (filename) => {
    const splittedWord = filename.split(".");
    return splittedWord[0];
  };

  const renderSelectedImage = () => {
    const filename = pickFilename(selectedImage.path);
    const filenameWithoutType = getFilenameWithoutType(filename);
    return (
      <>
        <p className="selected-image-title">{filenameWithoutType}</p>
        <img
          src={selectedImage.url}
          key={selectedImage.id}
          className="selected-image"
        />
      </>
    );
  };

  const renderGallery = () => (
    <div className="gallery-container">
      {!isError &&
        imagesURLs.map((imageURL) => {
          let isLoaded = false;
          return (
            <img
              src={imageURL.url}
              key={imageURL.id}
              className={`image-item image-${isLoaded} ? 'visible' :  'hidden'
            }`}
              onLoad={() => (isLoaded = true)}
              onClick={() => {
                setOpenModal(true);
                setSelectedImage(imageURL);
                setComments(imageURL.comments);
              }}
            />
          );
        })}

      {isError && <p>Something is not right</p>}
      {isLoading && <p>Loading images</p>}
      {!isError && !isLoading && imagesURLs.length === 0 && (
        <p>No any images yet</p>
      )}
    </div>
  );

  const renderSelectedImageModal = () => (
    <Modal
      title="Comments"
      open={openModal}
      onCancel={() => {
        setOpenModal(false);
      }}
      width={1000}
      footer={[]}
    >
      <div className="selected-image-container">
        {renderSelectedImage()}
        {comments.map(renderCommentItem)}
        {renderInputComments()}
      </div>
    </Modal>
  );

  const renderUploadStatus = () => (
    <div className="upload-status">
      <b>
        <p color="white">{uploadStatus}</p>
      </b>
    </div>
  );

  const renderNewImageForm = () => (
    <>
      <div className="upload-form">
        <input
          id="upload-image"
          type="file"
          accept="image/*"
          onChange={async (file) => {
            await operation.uploadImageResumeable(
              file,
              setImagesURLs,
              setUploadStatus
            );
          }}
          value=""
        />
        <label htmlFor="upload-image">Add new Image</label>
      </div>
    </>
  );

  useEffect(() => {
    const fetchImages = async () => {
      const imageURLs = await operation.getAllUploadedImagesURL();
      setImagesURLs(imageURLs);
    };

    fetchImages()
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, [comments]);

  return (
    <div className="page-container">
      {renderUploadStatus()}
      {renderNewImageForm()}
      {renderGallery()}
      {selectedImage && renderSelectedImageModal()}
    </div>
  );
};

export default GalleryPage;
