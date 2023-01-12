import React from "react";
import { AiFillLike } from "react-icons/ai";
import { useSelector } from "react-redux";
function LikedPosts() {
  const data = useSelector((state) => state.likedPosts);
  return (
    <div>
      <div className="ml-32 mt-28 w-[900px] flex flex-wrap flex-row justify-evenly ">
        <div className="text-2xl capitalize">
          {data.length === 0 && "No liked posts"}
        </div>
        {data.map((posts) => (
          <div
            key={posts.id}
            className="w-72 p-6 rounded-lg shadow-lg  bg-[#f1eeee] max-w-sm mt-4"
          >
            {" "}
            <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
              {posts.title}
            </h5>
            <p className="text-gray-700 text-base mb-4">{posts.body}</p>
            <button
              type="button"
              className=" inline-block px-6 py-2.5  text-black font-medium text-l leading-tight uppercase rounded shadow-md bg-[#43a1d6] hover:shadow-lg focus:b[#43a1d6] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#43a1d6]active:shadow-lg transition duration-150 ease-in-out "
            >
              <AiFillLike />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LikedPosts;
