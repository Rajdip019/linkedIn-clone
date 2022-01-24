/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */

import React from "react";
import Documnet from '../documemt';
import Link from "next/link"

const signin = () => {
  return (
      <>
      <Documnet />
    <Link href="/">
    <img src="/logo.jpeg" alt="" className="w-44 md:fixed ml-5 cursor-pointer" />
    </Link>
    <div className="flex flex-col h-screen mx-auto justify-center w-[450px]">
      <div className="h-[550px] min-w-[450px] md:bg-gray-50 md:shadow-2xl rounded-xl p-8 mx-auto">
        <h1 className="text-skin-main text-3xl font-bold">SignIn</h1>
        <p className="text-sm text-gray-600 mt-1">
          Stay updataed on your professional work!
        </p>
        <input
          type="email"
          name=""
          id="email"
          placeholder="Email or Phone"
          className="h-12 px-5 w-full my-5 mt-8  ring-1 ring-gray-400 focus:ring-blue-500 focus:border-blue-500 active:ring-blue-500 active:ring-1 focus:ring-1 focus:border-0 active:border-0 active:border-blue-500 rounded text-lg"
        />
        <input
          type="password"
          name=""
          id="pass"
          placeholder="Password"
          className="h-12 px-5 w-full my-3 mb-5 ring-1 ring-gray-400 focus:ring-blue-500 focus:border-blue-500 active:ring-blue-500 active:ring-1 focus:ring-1 focus:border-0 active:border-0 active:border-blue-500 rounded text-lg"
        />
        <p className="text-xs text-gray-700 font-semibold text-center mb-5">
          By clicking Agree & Join, you agree to the LinkedIn
          <span className="text-blue-500 hover:text-blue-700 hover:underline cursor-pointer">
            User Agreement,
          </span>
          <span className="text-blue-500 hover:text-blue-700 hover:underline cursor-pointer">
            
          {" "} Privacy Policy
          </span>
           {" "}and {" "}
          <span className="text-blue-500 hover:text-blue-700 hover:underline cursor-pointer">
            Cookie Policy.
          </span>
        </p>
        <button className="w-full bg-skin-main rounded-full  text-white py-3 font-semibold  hover:bg-blue-800 transition-all">
          Sign In
        </button>
        <div className="flex w-full justify-between items-center my-5">
          <div className="h-[1px] bg-gray-400 my-5 w-5/12"></div>
          <p className="text-sm text-gray-400">Or</p>
          <div className="h-[1px] bg-gray-400 my-5 w-5/12"></div>
        </div>
        <button className="w-full border-blue-500 border-2 rounded-full  text-skin-main py-3 font-semibold  hover:bg-blue-100 transition-all flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 48 48"
            className="mr-5"
          >
            <path
              fill="#FFC107"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
            <path
              fill="#FF3D00"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            ></path>
            <path
              fill="#4CAF50"
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            ></path>
            <path
              fill="#1976D2"
              d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
          </svg>
          Join with Google
        </button>
      </div>
        <p className="text-center mt-10">
          New to LinkedIn? <Link href="/auth/register"><span className="text-skin-main cursor-pointer group-visited:text-blue-700 hover:underline transition-all font-semibold">Register</span></Link>
        </p>
    </div>
      </>
  );
};

export default signin;
