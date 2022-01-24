import React from 'react';
import { Avatar } from '@mui/material';

const LeftBarMiddle = () => {
  return (
    <div className="max-w-[600px] mx-auto bg-white rounded-xl mt-5 px-4 pt-4 pb-2 border-gray-500 border-[1px] border-opacity-30 w-11/12 lg:hidden">
    <img src="/banner.jpg" alt="" className="rounded-t-xl h-24 w-[600px]" />
    <Avatar
      alt="Rajdeep Sengupta"
      src="/Profile Picture.png"
      sx={{ width: 80, height: 80 }}
      className="mx-auto -mt-12 ring-2 ring-white"
    />
    <p className="text-center mt-3 mb-1 font-semibold text-md text-gray-700">
      Rajdeep Sengupta
    </p>
    <p className="text-sm w-10/12 mx-auto text-center text-gray-500">
      This is just a Linkedin Clone build by Rajdeep Sengupta, enjoy here
      and post your review here with a photo.👇🔥
    </p>
    <hr className="my-2" />
    <div className="hover:bg-gray-200 cursor-pointer">
    <div className="w-10/12 mx-auto flex justify-between items-center my-1">
      <p className="text-xs text-gray-500 font-semibold">
        Who Viewed you profile:
      </p>
      <p className="text-sm text-blue-500 font-semibold">420</p>
    </div>
    </div>
    <div className="hover:bg-gray-200 cursor-pointer">
    <div className=" mx-auto flex justify-between items-center my-1 w-10/12 ">
      <p className="text-xs text-gray-500 font-semibold ">
        Views on your post:
      </p>
      <p className="text-sm text-blue-500 font-semibold">112</p>
    </div>

    </div>
    <hr className="" />
    <div className=" cursor-pointer hover:bg-gray-200 py-2 transition-all">
      <p className="text-xs font-light w-10/12 mx-auto text-gray-500">
        Access premium tools and insights
      </p>
      <p className="text-xs font-bold w-10/12 mx-auto text-gray-500">
      🗂️ Try premium for free
      </p>
    </div>
    <hr className="" />
    <div className=" cursor-pointer hover:bg-gray-200 py-3 transition-all flex rounded-b-xl">
      <p className="text-xs font-bold w-10/12 mx-auto text-gray-500 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
        </svg>
        My Items
      </p>
    </div>
  </div>
  );
};

export default LeftBarMiddle;
