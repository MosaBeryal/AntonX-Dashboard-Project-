import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { TbSlideshow } from "react-icons/tb";
import { SlUserFollowing } from "react-icons/sl";
import { FaUserFriends } from "react-icons/fa";
import { RxReader } from "react-icons/rx";
import { BiLike } from "react-icons/bi";

function SideBar() {
  useEffect(() => {
    
  }, []);
  return (
    <div>
      <div className="flex bg-[#f1eeee]  rounded-lg py-4 flex-nowrap h-[80%] mt-28 fixed flex-col w-60 z-10">
        <Link to="/home">
          <div className=" flex rounded-lg  px-5 text-2xl bg-[#008DB9] w-50 ml-5 mr-5  hover:bg-[#43a1d6] hover:shadow-sm hover:shadow-sky-700">
            <span>
              <RxDashboard className="text-Black my-1" />
            </span>
            <h4 className="ml-4 text-white ">Dashboard</h4>
          </div>
        </Link>

        <hr className="my-2 min-w-full" />

        <Link to="/slides">
          <div className=" flex rounded-lg  px-5 text-2xl bg-[#008DB9] w-50 ml-5 mr-5 my-3  hover:bg-[#43a1d6] hover:shadow-sm hover:shadow-sky-700">
            <span>
              <TbSlideshow className="text-black my-1" />
            </span>
            <h4 className="ml-4 text-white ">Gallery</h4>
          </div>
        </Link>

        <Link to="/posts">
          <div className=" flex rounded-lg  px-5 text-2xl bg-[#008DB9] w-50 ml-5 mr-5 my-3 hover:bg-[#43a1d6] hover:shadow-sm hover:shadow-sky-700">
            <span>
              <RxReader className="text-black my-1" />
            </span>
            <h4 className="ml-4 text-white ">Posts</h4>
          </div>
        </Link>

        <Link to="/users">
          <div className=" flex rounded-lg  px-5 text-2xl bg-[#008DB9] w-50 ml-5 mr-5 my-3 hover:bg-[#43a1d6] hover:shadow-sm hover:shadow-sky-700">
            <span>
              <FaUserFriends className="text-black my-1" />
            </span>
            <h4 className="ml-4 text-white ">Users</h4>
          </div>
        </Link>

        <Link to="/following">
          <div className=" flex rounded-lg  px-5 text-2xl bg-[#008DB9] w-50 ml-5 mr-5 my-3 hover:bg-[#43a1d6] hover:shadow-sm hover:shadow-sky-700">
            <span>
              <SlUserFollowing className="text-black my-1" />
            </span>
            <h4 className="ml-4 text-white ">Following</h4>
          </div>
        </Link>

        <Link to="/likedposts">
          <div className=" flex rounded-lg  px-5 text-2xl bg-[#008DB9] w-50 ml-5 mr-5 my-3 hover:bg-[#43a1d6] hover:shadow-sm hover:shadow-sky-700">
            <span>
              <BiLike className="text-black my-1" />
            </span>
            <h4 className="ml-4 text-white ">Liked Posts</h4>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SideBar;
