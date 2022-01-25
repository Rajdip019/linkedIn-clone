import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import { comment } from "postcss";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import { db } from "../../../firebase";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Moment from "react-moment";
import { async } from "@firebase/util";

const Feed = ({ id, email, name, image, caption, profileImage }) => {
  const { data: session } = useSession();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [like, setLike] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const sendComment = async (e) => {
    e.preventDefault();

    const commentToSend = comment;
    setComment("");

    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      username: session?.user?.name,
      userImage: session?.user?.image,
      timestamp: serverTimestamp(),
    });
  };

  useEffect(() => {
    onSnapshot(
      query(
        collection(db, "posts", id, "comments"),
        orderBy("timestamp", "desc")
      ),
      (snapshot) => setComments(snapshot.docs)
    );
  }, []);

  useEffect(() => {
    onSnapshot(
      collection(db, "posts", id, "likes"),
      orderBy("timestamp", "desc"),
      (snapshot) => setLike(snapshot.docs)
    );
  }, []);

useEffect(() => {
  setHasLiked(
  like.findIndex((likes) => likes.id === session?.user?.uid ) !== -1
  )}, [like])
  
  const likePost = async () => {
    if (hasLiked) {
      await deleteDoc(doc(db, "posts", id, "likes", session?.user?.uid));
    } else {
      await setDoc(doc(db, "posts", id, "likes", session?.user?.uid), {
        username: session.user.name,
      });
    }
  };

  const handleDelete = async (() => {
    deleteDoc(doc(db, "posts", id ));
  })


  return (
    <div className="max-w-[600px] mx-auto bg-white rounded-xl mt-5 px-4 pt-2 pb-2 border-gray-500 border-[1px] border-opacity-30 w-11/12">
      <div className="flex items-center py-2">
        <Avatar
          alt={name}
          src={profileImage}
          sx={{ width: 48, height: 48 }}
          className=" ring-2 ring-white"
        />
        <div>
          <p className="ml-3">{name}</p>
          <p className="ml-3 text-xs text-gray-600">
            I am posting in LinkedIn clone - by Rajdeep Sengupta
          </p>
        </div>
      </div>
      <h3 className="my-2">{caption}</h3>
      <img src={image} alt="" className="mx-auto rounded-lg" />
      <div className="flex justify-between">
        <div className="text-sm py-2 font-bold text-gray-600"> {like.length} likes</div>
        <div className="text-sm py-2 font-bold text-gray-600">
          {" "}
          {comments.length} comments
        </div>
      </div>
      <hr />

      {email === session?.user?.email && (

      <div className="flex justify-between mt-2 sm:w-11/12 mx-auto">
        <div
          className="flex items-center font-semibold p-2 cursor-pointer hover:bg-gray-200 rounded-lg transition-all text-gray-700 "
          onClick={() => {
            likePost();
          }}
        >
          {hasLiked ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
              />
            </svg>
          )}{" "}
          Like
        </div>
        <div
          className="flex items-center font-semibold p-2 cursor-pointer hover:bg-gray-200 rounded-lg transition-all text-gray-700"
          onClick={handleOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>{" "}
          Comment
        </div>
        <div className="flex items-center font-semibold p-2 cursor-pointer hover:bg-gray-200 rounded-lg transition-all text-red-500" onClick={() => {handleDelete()}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clip-rule="evenodd"
            />
          </svg>{" "}
          Delete
        </div>
      </div>
      )}
      {email !== session?.user?.email && (
      <div className="flex justify-between mt-2 sm:w-11/12 mx-auto">
        <div
          className="flex items-center font-semibold p-2 cursor-pointer hover:bg-gray-200 rounded-lg transition-all text-gray-700"
          onClick={() => {
            likePost();
          }}
        >
          {hasLiked ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
              </svg>{" "}
              Liked
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>{" "}
              Like
            </>
          )}
        </div>
        <div
          className="flex items-center font-semibold p-2 cursor-pointer hover:bg-gray-200 rounded-lg transition-all text-gray-700"
          onClick={handleOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>{" "}
          Comment
        </div>
        <div className="sm:flex items-center font-semibold p-2 cursor-pointer hover:bg-gray-200 rounded-lg transition-all text-gray-700 hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>{" "}
          Share
        </div>
        <div className="flex items-center font-semibold p-2 cursor-pointer hover:bg-gray-200 rounded-lg transition-all text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            />
          </svg>{" "}
          Send
        </div>
      </div>
        
      )}
      <div className="flex items-center">
        <input
          type="text"
          name=""
          id=""
          className="w-full ring-1 h-10 rounded-full my-2 ring-gray-500 focus:outline-none px-4"
          placeholder="Type your comment..."
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
        <button
          className="mx-2 hover:text-black hover:scale-125 transition-all text-gray-700 cursor-pointer"
          disabled={!comment.trim()}
          onClick={(e) => {
            sendComment(e);
          }}
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
        </button>
      </div>
      {/* Comments Modal here */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="mt-28 rounded-xl">
          <div className="max-w-[500px] max-h-[500px] bg-white mx-auto p-4 rounded-xl overflow-y-scroll">
            <Box>
              <h1 className="text-2xl pb-4 pt-2 text-gray-700 flex justify-between">
                Comments{" "}
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
              <hr className="my-2" />
              <div>
                {comments.map((comment) => {
                  return (
                    <div key={comment.id}>
                      <div className="flex items-center justify-between">
                        <div className="flex">
                          <Avatar
                            alt={comment.data().username}
                            src={comment.data().userImage}
                            sx={{ width: 32, height: 32 }}
                            className=" ring-2 ring-white my-2"
                          />
                          <p className="ml-2 text-sm font-semibold flex-col flex">
                            {comment.data().username} :{" "}
                            <Moment fromNow className="text-xs">
                              {comment.data().timestamp?.toDate()}
                            </Moment>
                          </p>
                          <p>{comment.data().comment}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div className="flex items-center">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-full ring-1 h-10 rounded-full my-2 ring-gray-500 focus:outline-none px-4"
                    placeholder="Type your comment..."
                    value={comment}
                    onChange={(e) => {
                      setComment(e.target.value);
                    }}
                  />
                  <button
                    className="mx-2 hover:text-black hover:scale-125 transition-all text-gray-700 cursor-pointer"
                    disabled={!comment.trim()}
                    onClick={(e) => {
                      sendComment(e);
                    }}
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                  </button>
                </div>
              </div>
            </Box>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Feed;
