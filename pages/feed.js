import React from "react";
import Navbar from "./components/Feed/Navbar";
import Leftbar from "./components/Feed/Leftbar";
import Leftbar2 from "./components/Feed/Leftbar2";
import Rightbar from "./components/Feed/Rightbar";
import Rightbar2 from "./components/Feed/Rightbar2";
import CreateArea from "./components/Feed/CreateArea";
import Feed from "./components/Feed/Feed";
import LeftBarMiddle from "./components/Feed/LeftBarMiddle";
import Documnet from "./documemt";

const feed = () => {
  return (
    <>
      <div className="bg-[#F3F3EE] min-h-screen">
        <Documnet />
        <Navbar />
        <div className="lg:grid lg:grid-cols-9 lg:w-[1024px] mx-auto gap-8">
          <div className="ml-auto hidden lg:block col-span-2">
            <Leftbar />
            <Leftbar2 />
          </div>
          <div className=" col-span-5 ml-auto">
            <LeftBarMiddle />
            <CreateArea />
            <Feed />
            <Feed />
            <Feed />
            <Feed />
            <Feed />
            <Feed />
          </div>
          <div className="mr-auto hidden xl:block col-span-2">
            <Rightbar />
            <Rightbar2 />
          </div>
        </div>
      </div>
    </>
  );
};

export default feed;
