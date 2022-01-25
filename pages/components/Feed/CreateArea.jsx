import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Avatar } from "@mui/material";
import { db, storage } from "../../../firebase";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { ref, getDownloadURL, uploadString } from "firebase/storage";

const CreateArea = ({ name, image, email }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [post, setPost] = useState(false);
  const [posting, setPosting] = useState(false)
  const filePickerRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  const uploadPost = async () => {
    //Create a post and add to firestore
    setPosting(true)
    const docRef = await addDoc(collection(db, "posts"), {
      username: name,
      caption: post,
      profileImage: image,
      useremail: email,
      timestamp: serverTimestamp(),
    });


    if(selectedFile){
      const imageRef = ref(storage, `posts/${docRef.id}/image`);
  
      await uploadString(imageRef, selectedFile, "data_url").then(
        async (snapshot) => {
          const downloadURL = await getDownloadURL(imageRef);
          await updateDoc(doc(db, "posts", docRef.id), {
            image: downloadURL,
          });
        }
      );

    }
    handleClose();
    setSelectedFile(null)
    setPosting(false)
  };

  return (
    <div className="max-w-[600px] mx-auto bg-white rounded-xl mt-5 px-4 pt-4 pb-2 border-gray-500 border-[1px] border-opacity-30 w-11/12">
      <div className="flex items-center w-full">
        <Avatar
          alt={name}
          src={image}
          sx={{ width: 48, height: 48 }}
          className=" ring-2 ring-white"
        />
        <button onClick={handleOpen} className="flex sm:w-11/12 w-10/12">
          <div className="w-[500px] h-12 ml-3 rounded-full border-[1px] border-gray-700 hover:bg-gray-100 transition-all cursor-pointer text-left">
            <p className="mt-[0.81rem] ml-5 text-sm">Start a Post</p>
          </div>
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="mt-28">
            <div className="max-w-[500px] bg-white mx-auto p-4 rounded-xl">
              <Box>
                <h1 className="text-2xl pb-4 pt-2 text-gray-700 flex justify-between">
                  Create a Post{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 cursor-pointer"
                    onClick={handleClose}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </h1>
                <hr className="pb-2" />
                <div className="flex  items-center">
                  <Avatar
                    alt={name}
                    src={image}
                    sx={{ width: 48, height: 48 }}
                    className=" ring-2 ring-white"
                  />
                  <p className="ml-3 font-semibold text-gray-800">{name}</p>
                </div>
                <textarea
                  name=""
                  id=""
                  className="h-32 resize-none w-full mt-3 bg-white focus:outline-none px-2"
                  onChange={(e) => {
                    setPost(e.target.value);
                  }}
                  placeholder="What do you want to talk about?"
                ></textarea>
                {selectedFile ? (
                  <>
                    <img
                      src={selectedFile}
                      onClick={() => {
                        setSelectedFile(null);
                      }}
                      alt=""
                    />
                  </>
                ) : null}
                <div className="flex justify-between items-center">
                  <div
                    onClick={() => {
                      filePickerRef.current.click();
                    }}
                    className="flex items-center p-2 rounded-lg hover:bg-gray-200 cursor-pointer text-sm text-gray-700 font-semibold transition-all"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-10 w-10 p-2 text-blue-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Photo
                    <input
                      ref={filePickerRef}
                      type="file"
                      hidden
                      onChange={addImageToPost}
                    />
                  </div>
                  {post ? (
                    <button
                      className="font-bold bg-skin-main px-4 py-2 rounded-full text-white hover:bg-blue-800 transition-all"
                      onClick={() => {
                        uploadPost();
                      }}
                    >
                      {posting ? (<>Posting</>) : (<>Post</>)}
                    </button>
                  ) : (
                    <button className="font-bold bg-gray-700 px-4 py-2 rounded-full text-white transition-all">
                      Post
                    </button>
                  )}
                </div>
              </Box>
            </div>
          </div>
        </Modal>
      </div>
      <div className="mt-2 flex justify-between" onClick={handleOpen}>
        <div className="flex items-center p-2 rounded-lg hover:bg-gray-200 cursor-pointer text-sm text-gray-700 font-semibold transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10 p-2 text-blue-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
              clip-rule="evenodd"
            />
          </svg>
          Photo
        </div>
        <div className="flex items-center p-2 rounded-lg hover:bg-gray-200 cursor-pointer text-sm text-gray-700 font-semibold transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10 p-2 text-green-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
          </svg>
          Video
        </div>
        <div className="flex items-center p-2 rounded-lg hover:bg-gray-200 cursor-pointer text-sm text-gray-700 font-semibold transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10 p-2 text-yellow-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clip-rule="evenodd"
            />
          </svg>
          Event
        </div>
        <div className="items-center p-2 rounded-lg hover:bg-gray-200 cursor-pointer text-sm text-gray-700 font-semibold transition-all hidden sm:flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10 p-2 text-red-300"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
            <path
              fill-rule="evenodd"
              d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
              clip-rule="evenodd"
            />
          </svg>
          Write a Article
        </div>
      </div>
    </div>
  );
};

export default CreateArea;
