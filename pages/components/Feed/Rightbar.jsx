import React from "react";

const Rightbar = () => {
  return (
    <div className="w-72 bg-white mx-auto mt-5 rounded-xl py-4">
      <div className=" flex items-center justify-between px-4">
        <h2 className="font-semibold">LinkedIn News </h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 cursor-pointer"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div className="px-4 hover:bg-gray-200 transition-all cursor-pointer mt-3">
        <ul className="list-disc px-4 py-2 text-sm text-gray-800">
          <li className="font-semibold">Get ready with jobs Bootcamp <p className="flex text-xs py-1 text-gray-600">Top News <li className="ml-7">399,541 reader</li></p></li>
        </ul>
      </div>
      <div className="px-4 hover:bg-gray-200 transition-all cursor-pointer">
        <ul className="list-disc px-4 py-2 text-sm text-gray-800">
          <li className="font-semibold">The most powerful passports <p className="flex text-xs py-1 text-gray-600">6d ago <li className="ml-7">5,410 reader</li></p></li>
        </ul>
      </div>
      <div className="px-4 hover:bg-gray-200 transition-all cursor-pointer">
        <ul className="list-disc px-4 py-2 text-sm text-gray-800">
          <li className="font-semibold">Dolo's rise to fame <p className="flex text-xs py-1 text-gray-600">5d ago <li className="ml-7">22,697 reader</li></p></li>
        </ul>
      </div>
      <div className="px-4 hover:bg-gray-200 transition-all cursor-pointer">
        <ul className="list-disc px-4 py-2 text-sm text-gray-800">
          <li className="font-semibold">Fastest growing job<p className="flex text-xs py-1 text-gray-600">5g ago <li className="ml-7">26,113 reader</li></p></li>
        </ul>
      </div>
      <div className="px-4 hover:bg-gray-200 transition-all cursor-pointer">
        <ul className="list-disc px-4 py-2 text-sm text-gray-800">
          <li className="font-semibold">Apple shines, Netflix slows <p className="flex text-xs py-1 text-gray-600">2d ago <li className="ml-7">2,648 reader</li></p></li>
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
