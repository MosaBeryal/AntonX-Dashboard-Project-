import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { unFollow } from "../store/FollowingSlice";

function Following() {
  const data = useSelector((state) => state.following);

  const dispatch = useDispatch();

  const handleUnFollow = (user) => {
    dispatch(unFollow(user));
};

  const notify = (user) =>
    toast.info(` unfollowed ${user.name}`, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  return (
    <div className="ml-32 mt-28 w-[800px] flex flex-wrap flex-row justify-around">
    {
      data.length===0?<h1 className="text-2xl capitalize">No user Followed</h1>:""}
    
      {data.map((Users) => (
        <div key={Users.id}>
          <div className="flex items-center  justify-center mt-7 w-64 ">
            <div className="max-w-xs">
              <div className=" bg-[#f1eeee] shadow-xl rounded-lg py-3">
                <div className=" p-2 flex justify-center">
                  <FaUserCircle className="text-5xl text-[#008DB9]" />
                </div>
                <div className="p-2">
                  <h3 className="text-center text-xl text-gray-900 font-medium w-52 leading-8">
                    {Users.name}
                  </h3>
                  <div className="text-center text-gray-400  font-semibold">
                    <p>{Users.company.name}</p>
                  </div>

                  <div className="text-center my-3">
                    <button
                      className="w-18 h-18 hover:bg-[#43a1d6] text-[white] focus:bg-[#43a1d6] text-lg bg-[#1999c0] rounded"
                      onClick={() => {
                        handleUnFollow(Users.id);
                        notify(Users);
                      }}
                    >
                      {" "}
                      UnFollow
                    </button>
                    <ToastContainer />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Following;
