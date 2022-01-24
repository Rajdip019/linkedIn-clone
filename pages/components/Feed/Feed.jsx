import React, { useState } from "react";
import { Avatar } from "@mui/material";

const Feed = () => {
  const [like, setLike] = useState(false);

  return (
    <div className="max-w-[600px] mx-auto bg-white rounded-xl mt-5 px-4 pt-2 pb-2 border-gray-500 border-[1px] border-opacity-30 w-11/12">
      <div className="flex items-center py-2">
        <Avatar
          alt="Rajdeep Sengupta"
          src="/Profile Picture.png"
          sx={{ width: 48, height: 48 }}
          className=" ring-2 ring-white"
        />
        <div>
          <p className="ml-3">Rajdeep Sengupta</p>
          <p className="ml-3 text-xs text-gray-600">
            I am posting in LinkedIn clone - by Rajdeep Sengupta
          </p>
        </div>
      </div>
      <img
        src="https://images.newindianexpress.com/uploads/user/imagelibrary/2019/3/7/w900X450/Take_in_the_Scenery.jpg?w=400&dpr=2.6"
        alt=""
        className="mx-auto rounded-lg"
      />
      <div className="text-sm py-2 font-bold text-gray-600"> 10 Likes</div>
      <hr />
      <div className="flex justify-between mt-2 sm:w-11/12 mx-auto">
        <div
          className="flex items-center font-semibold p-2 cursor-pointer hover:bg-gray-200 rounded-lg transition-all text-gray-700"
          onClick={() => {
            setLike(!like);
          }}
        >
          {like ? (
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
        <div className="flex items-center font-semibold p-2 cursor-pointer hover:bg-gray-200 rounded-lg transition-all text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
</svg>{" "}
          Comment
        </div>
        <div className="sm:flex items-center font-semibold p-2 cursor-pointer hover:bg-gray-200 rounded-lg transition-all text-gray-700 hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
</svg>{" "}
          Share
        </div>
        <div className="flex items-center font-semibold p-2 cursor-pointer hover:bg-gray-200 rounded-lg transition-all text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
</svg>{" "}
          Share
        </div>
      </div>
    </div>
  );
};

export default Feed;
