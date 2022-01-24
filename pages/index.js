import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Avatar } from "@mui/material";
import Document from "./documemt";
import Link from "next/link"

export default function Home() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Document />

      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex p-5 md:flex-row w-10/12 justify-between items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 justify-between">
            <img
              src="./linkedin.svg"
              className="w-20 sm:w-full mt-5 sm:mt-auto"
            />
          </a>
          <nav className="md:ml-auto lg:flex items-center text-base justify-center border-r-2 hidden ">
            <span className="mr-10 hover:text-gray-900 cursor-pointer">
              <img src="./discover.svg" className="mx-auto" />
              <a className="hover:text-gray-900 text-center">Discover</a>
            </span>
            <span className="mr-10 hover:text-gray-900 cursor-pointer">
              <img src="./people.svg" className="mx-auto" />
              <a className="hover:text-gray-900 text-center">people</a>
            </span>
            <span className="mr-10 hover:text-gray-900 cursor-pointer">
              <img src="./learning.svg" className="mx-auto" />
              <a className="hover:text-gray-900 text-center">learning</a>
            </span>
            <span className="mr-10 hover:text-gray-900 cursor-pointer">
              <img src="./jobs.svg" className="mx-auto scale-100 mb-1" />
              <a className="hover:text-gray-900 text-center">Jobs</a>
            </span>
          </nav>
          <div className="inline-flex mt-4 lg:mt-0">
            <span className="block lg:hidden">
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                className=""
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-7 w-7 mx-6 block lg:hidden text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose} className="flex items-center t">
                  {" "}
                  <img src="./discover.svg" className="mr-2" /> Discover
                </MenuItem>
                <MenuItem onClick={handleClose} className="flex items-center">
                  <img src="./people.svg" className=" mr-2" />
                  people
                </MenuItem>
                <MenuItem onClick={handleClose} className="flex items-center">
                  <img src="./learning.svg" className=" mr-2" />
                  learning
                </MenuItem>
                <MenuItem onClick={handleClose} className="flex items-center">
                  <img src="./jobs.svg" className=" mr-2" />
                  Jobs
                </MenuItem>
              </Menu>
            </span>
            <Link href="/auth/register">
            <button className="hidden lg:inline-flex items-center border-0 py-2 px-4 focus:outline-none font-medium hover:bg-gray-200 rounded text-base md:mt-0 transition-all mr-3">
              Join now
            </button>
            </Link>
            <Link href="/auth/signin">
            <button className="inline-flex outline outline-2 outline-linkedin-blue text-linkedin-blue font-medium items-center py-1 md:py-2 px-5 rounded-3xl transition-all hover:bg-blue-100">
              Sign in
            </button>
            </Link>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="px-[2vw] py-[2vh] md:py-[10vh] md:px-[8vw]">
          <h1 className="text-5xl font-thin mb-10 text-brown leading-snug">
            Welcome to your
            <br /> professional community
          </h1>
          <div>
            <div className="inline-flex w-[408px] py-4 px-6 outline-1 rounded-xl justify-between mb-5 hover:shadow-lg">
              <h1 className="text-lg">Get Started</h1>
              <img src="./sidearrow.svg" />
            </div>

            <div className="inline-flex w-[408px] py-4 px-6 outline-1 rounded-xl justify-between mb-5 hover:shadow-lg">
              <h1 className="text-lg">Find a person you know</h1>
              <img src="./sidearrow.svg" />
            </div>

            <div className="inline-flex w-[408px] py-4 px-6 outline-1 rounded-xl justify-between mb-5 hover:shadow-lg">
              <h1 className="text-lg">Learn a new skill</h1>
              <img src="./sidearrow.svg" />
            </div>
          </div>
        </div>

        <img src="./landing.svg" className="scale-90 m-auto" />
      </div>
    </div>
  );
}
