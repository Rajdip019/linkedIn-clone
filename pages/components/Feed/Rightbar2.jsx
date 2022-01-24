import React from "react";

const Rightbar2 = () => {
  return (
    <div className="w-72 mx-auto mt-5 rounded-xl py-4 ">
      <div className="flex flex-wrap w-10/12 text-center mx-auto">
        <p className="text-xs text-gray-600 hover:text-blue-600 hover:underline mx-2 transition-all cursor-pointer my-1">
          About
        </p>
        <p className="text-xs text-gray-600 hover:text-blue-600 hover:underline mx-2 transition-all cursor-pointer my-1">
          Accessbility
        </p>
        <p className="text-xs text-gray-600 hover:text-blue-600 hover:underline mx-2 transition-all cursor-pointer my-1">
          Help Center
        </p>
        <p className="text-xs text-gray-600 hover:text-blue-600 hover:underline mx-2 transition-all cursor-pointer my-1 flex items-center">
          Privacy & Terms{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </p>
        <p className="text-xs text-gray-600 hover:text-blue-600 hover:underline mx-2 transition-all cursor-pointer my-1">
          Ad Choices
        </p>
        <p className="text-xs text-gray-600 hover:text-blue-600 hover:underline mx-2 transition-all cursor-pointer my-1">
          Advertising
        </p>
        <p className="text-xs text-gray-600 hover:text-blue-600 hover:underline mx-2 transition-all cursor-pointer my-1 flex items-center">
          Business Services{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </p>
        <p className="text-xs text-gray-600 hover:text-blue-600 hover:underline mx-2 transition-all cursor-pointer my-1">
          Get the LinkedIn App
        </p>
        <p className="text-xs text-gray-600 hover:text-blue-600 hover:underline mx-2 transition-all cursor-pointer my-1">
          More
        </p>
      </div>
      <div className="w-10/12 mx-auto flex items-center mt-3">
      <img src="/logo.jpeg" alt="" className="w-16" />
      <p className="text-xs ml-2 text-gray-600">Rajdeep Sengupta &copy; 2022 </p>
      </div>
    </div>
  );
};

export default Rightbar2;
