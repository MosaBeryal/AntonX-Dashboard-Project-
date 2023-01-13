import React from "react";
import AntonX from "../assets/img/AntonX.png";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

function LoginPage({ setLogin }) {
  useEffect(() => {
    if (window.localStorage.getItem("login") === true) {
      navigate("/home");
    }
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userEmail = localStorage.getItem("email")
    ? localStorage.getItem("email")
    : "admin@admin.com";
  const userPassword = localStorage.getItem("password")
    ? localStorage.getItem("password")
    : "admin";
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if(email==="")
    {
      toast.error("enter your email")
      // alert("enter email")
    }
    else if(password==="")
    {
      toast.error("enter your password")
      // alert("enter password")
    }
    else if (email === userEmail && password === userPassword) {
      toast.success("successfully loged in", {
        position: "bottom-right",
      });
      localStorage.setItem("login", true);
      navigate("/home");
      setLogin(true);
    } else {
      toast.error("Invalid email or password", {
        position: "bottom-right",
        autoClose: 1000,
      });
      
    }
  }

  return (
    <div>
    <ToastContainer/>
      <div className="min-h-screen  py-6 flex flex-col sm:py-12 rounded ml-36 mt-10 bg-[white] fixed bg-[white]">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-black bg-[#008DB9] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-[#f1eeee] shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <img src={AntonX} alt="formlogo" width="180px"></img>
                <h1 className="flex justify-center text-lg">SignIn</h1>
              </div>
              <div className="divide-y divide-gray-200 ">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <form>
                    <div className="relative">
                      <input
                        autoComplete="off"
                        id="email"
                        name="email"
                        type="email"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 rounded"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label
                        htmlFor="email"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Email
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        autoComplete="off"
                        id="password"
                        name="password"
                        type="password"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 rounded"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <label
                        htmlFor="password"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Password
                      </label>
                    </div>
                    <div className="flex mt-3 space-x-10 ml-3">
                      <div className="relative">
                        <button
                          type="submit"
                          className=" bg-[#008DB9] text-white rounded-md px-2 py-1 hover:bg-[#43a1d6]"
                          onClick={handleSubmit}
                        >
                          SignIn
                        </button>
                        
                      </div>
                      <Link to="/registration">
                        <div className="relative">
                          <button
                            type="submit"
                            className=" bg-[black] text-white rounded-md px-2 py-1 hover:bg-[#43a1d6]"
                          >
                            Register
                          </button>
                        </div>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
