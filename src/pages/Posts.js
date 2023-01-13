import React from "react";
import { useQuery } from "react-query";
import Axios from "axios";
import { AiFillLike } from "react-icons/ai";
import Spinner from "../Components/Spinner";
import { like } from "../store/LikedPostsSlice";
import { useDispatch } from "react-redux";
import ApiError from '../Components/ApiError'

function Posts() {
  const { data, isLoading , isError} = useQuery(["users"], () => {
    return Axios.get(`${process.env.REACT_APP_BASE_URL}/posts`).then(
      (res) => res.data
    );
  });
  const dispatch = useDispatch();
  const handleLike = (posts) => {
    dispatch(like(posts));
  };

  return (
    <div>
      <div className="ml-32  w-[800px] flex flex-wrap flex-row justify-around mt-24">
        {isError ? <ApiError /> : ""}
        {isLoading ? (
          <Spinner />
        ) : (
          data?.map((posts) => (
            <div
              key={posts.id}
              className="w-64 p-6 rounded-lg shadow-lg  bg-[#f1eeee] max-w-xs mt-5  "
            >
              {" "}
              <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2 capitalize">
                {posts?.title}
              </h5>
              <p className="text-gray-700 text-base mb-4 normal-case">
                {posts?.body}
              </p>
              <div>
                <button
                  type="button"
                  className=" inline-block  px-6 py-2.5 bg-[#008DB9] text-white font-medium text-l leading-tight uppercase rounded shadow-md hover:bg-[#43a1d6] hover:shadow-lg focus:bg-[#43a1d6] focus:shadow-lg focus:text-black  focus:ring-0 active:bg-[#43a1d6]active:shadow-lg transition duration-150 ease-in-out"
                  onClick={() => {
                    handleLike(posts);
                  }}
                >
                  <AiFillLike />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Posts;
