import React,{useEffect} from "react";
import logo from "../assets/img/AntonX.png";
import { Link } from "react-router-dom";
import { AiFillLike } from "react-icons/ai";
import { useSelector } from "react-redux";
import { TfiUser } from "react-icons/tfi";
import { FaUserFriends } from "react-icons/fa";

function AdminNavbar({login}) {
  
  useEffect(() => {
    
  }, []);
  const likedPosts = useSelector((state) => state.likedPosts);

  const following = useSelector((state) => state.following);
  return (
    <div>
      <nav className="flex w-full bg-[#f1eeee] h-24 py-7 z-10 fixed item-center  justify-between px-10">
        <div className=" flex text-[#00000]">
          <Link to="/home">
            <img src={logo} width="180px" alt="logo" />
          </Link>
        </div>
        <ul className="flex  justify-center">
          <li></li>
          <li>
            <div className="flex">
              <Link to="/following">
                <FaUserFriends className="text-3xl text-[#000000]" />
              </Link>
              <span className="w-6 h-6 bg-[#008DB9] rounded-full mb-4 ">
                <p className="text-[10px] py-1 text-[white] pl-2">
                  {following.length}
                </p>
              </span>
            </div>
          </li>
          <li>
            <div className="flex  ml-4 ">
              <Link to="/likedposts">
                <AiFillLike className="text-3xl text-[#000000]" />
              </Link>
              <span className="w-6 h-6 bg-[#008DB9] rounded-full mb-4 ">
                <p className="text-[10px] py-1 text-[white] pl-2">
                  {likedPosts.length}
                </p>
              </span>
            </div>
          </li>
        </ul>

        <div className="flex  text-[#00000] mb-4 w-24 h-7 bg-[#43a1d6] font-bold  rounded-lg font-mono italic">
          {/* <NavbarSearch/> */}
          <span className="p-2 text-lg ">
            <TfiUser />
          </span>
          <p className="text-lg capitalize text-white ">
            {
            login?window.localStorage.getItem("email"):<Link to="/">Login</Link>
            }
          </p>
        </div>
      </nav>
    </div>
  );
}

export default AdminNavbar;
