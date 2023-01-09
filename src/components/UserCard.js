import React from "react";
import image1 from "../assets/img/team-3-800x800.jpg";


function UserCard(props) {
              

  return (
    <div>
          <div className="mb-4 ml-80 h-44 absolute mt-32 w-32 bg-[#f1eeee]  rounded-xl flex flex-col justify-center  duration-300 hover:bg-white hover:shadow-xl hover:shadow-sky-700">
            <img
              src={image1}
              width="90px"
              height="50px"
              alt="userimg"
              className="rounded-full ml-4"
            />
            <span className="mt-6 text-sm ?leading-5 font-semibold text-center ">
            <h1>{props.name}</h1>
              
            </span>
            <span className="text-[12px] text-center">
              {props.id}
            </span>
          </div>
    
    </div>
  );
}

export default UserCard;
