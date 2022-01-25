import React, { useState, useEffect } from "react";
import Navbar from "./components/Feed/Navbar";
import Leftbar from "./components/Feed/Leftbar";
import Leftbar2 from "./components/Feed/Leftbar2";
import Rightbar from "./components/Feed/Rightbar";
import Rightbar2 from "./components/Feed/Rightbar2";
import CreateArea from "./components/Feed/CreateArea";
import Feed from "./components/Feed/Feed";
import LeftBarMiddle from "./components/Feed/LeftBarMiddle";
import Documnet from "./documemt";
import { useSession } from "next-auth/react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "@mui/material";

const feed = () => {
  const { data: session } = useSession();
  const name = session?.user?.name;
  const image = session?.user?.image;
  const mail = session?.user?.email;

  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    []
  );

  return (
    <>
      <div className="bg-[#F3F3EE] min-h-screen">
        <Documnet />
        {session ? (
          <>
            <Navbar name={name} image={image} email={mail} />
            <div className="lg:grid lg:grid-cols-9 lg:w-[1024px] mx-auto gap-8">
              <div className="ml-auto hidden lg:block col-span-2">
                <Leftbar name={name} image={image} email={mail} />
                <Leftbar2 />
              </div>
              <div className=" col-span-5 ml-auto">
                <LeftBarMiddle name={name} image={image} email={mail} />
                <CreateArea name={name} image={image} email={mail} />
                {posts.map((post) => {
                  return (
                    <Feed
                      key={post.id}
                      id={post.id}
                      name={post.data().username}
                      caption={post.data().caption}
                      image={post.data().image}
                      profileImage={post.data().profileImage}
                      email={post.data().useremail}
                    />
                  );
                })}
              </div>
              <div className="mr-auto hidden xl:block col-span-2">
                <Rightbar />
                <Rightbar2 />
              </div>
            </div>
          </>
        ) : (
          <>
          <div className="w-full mx-auto flex justify-center h-screen items-center">
          <Link href="/auth/signin">
            <button className="bg-skin-main mx-auto rounded-full px-4 py-2 text-white font-bold text-2xl hover:bg-blue-700 transition-all">Sign In to Acess this Page</button>
            </Link>
          </div>
          </>
        )}
      </div>
    </>
  );
};

export default feed;
