import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import { FaUserCircle } from "react-icons/fa";
import { useQuery } from "react-query";
import Axios from "axios";
import Spinner from "../Components/Spinner";
import { useDispatch } from "react-redux";
import { follow } from "../store/FollowingSlice";
import ApiError from "../Components/ApiError";

function Users() {
  
  const { data, isLoading ,isError } = useQuery(["users"], () => {
    return Axios.get(`${process.env.REACT_APP_BASE_URL}/users`).then(
      (res) => res.data
    );
  });
  
  const dispatch = useDispatch();
  const handleFollowers = (User) => {
    dispatch(follow(User));
  };
  
  return (
    <div className="ml-32 mt-24 w-[850px] flex flex-wrap flex-row justify-evenly">
    {
      isError?<ApiError/>:""
    }
      {isLoading ? (
        <Spinner />
      ) : (
        data?.map((Users) => (
          <div key={Users.id}>
            <div className="flex items-center w-52 justify-center mt-7 h-56 overflow-hidden rounded-lg">
              <div className="max-w-xs">
                <div className=" bg-[#f1eeee] shadow-xl rounded-lg py-3">
                  <div className=" p-2 flex justify-center">
                    <FaUserCircle className="text-6xl text-[#008DB9]" />
                  </div>
                  <div className="p-2">
                    <h3 className="text-center text-xl text-gray-900 font-medium w-52 leading-8">
                      {Users?.name}
                    </h3>
                    <div className="text-center text-gray-400  font-semibold">
                      <p>{Users.company?.name}</p>
                    </div>

                    <div className="text-center my-3">
                      <button
                        className="w-16 h-18 hover:bg-[#43a1d6] text-[white] hover:shadow-lg focus:text-black shadow-white focus:bg-[#43a1d6] text-lg bg-[#1999c0] rounded"
                        onClick={() => {
                          handleFollowers(Users);
                          
                          
                        }}
                      >
                        {" "}
                        Follow
                      </button>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Users;
