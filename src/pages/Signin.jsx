import React, { useState } from "react";
import Quote from "../components/Quote";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io";
import { FaLinkedin, FaDiscord, FaGithub, FaTwitter, FaSun, FaMoon } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../Firebase";
import { signInWithPopup } from "firebase/auth";
import { toast } from "react-toastify";

export default function Signin() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(true);

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User signed in:", result.user);
      toast.success("Signed in successfully!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error signing in:", error);
      toast.error("Failed to sign in: " + error.message);
    }
  };

  function handleLogin() {
    navigate("/dashboard");
  }


  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`h-screen flex relative ${darkMode ? "bg-[#161616] text-white" : "bg-white text-black"}`}>
 
      <div className={`hidden md:flex md:w-[40%] ${darkMode ? "bg-[#605BFF]" : "bg-gray-200"} py-10 px-14 items-center justify-center relative`}>
        <Quote />
       
        <button
          onClick={toggleDarkMode}
          className={`absolute bottom-5 right-5 p-2 rounded-full transition-colors ${darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"}`}
        >
          {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
      </div>

      
      <div className="w-full md:w-[60%] md:py-20 md:px-64 p-5 flex flex-col justify-center items-center">
        
        <div className={`block md:hidden w-full ${darkMode ? "bg-[#605BFF]" : "bg-gray-200"} text-white p-4 fixed top-0 left-0 z-10 flex items-center justify-between`}>
          <p className="text-2xl font-semibold">Base</p>
          <div className="flex items-center">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors ${darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"}`}
            >
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
            <button className="text-xl ml-4">
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>

      
        <div className="pt-16 md:pt-0 w-full max-w-md">
          <p className="text-3xl font-semibold mb-2">Sign In</p>
          <p className="text-gray-400 mb-8">Sign in to your account</p>

       
          <div className="flex gap-4 mb-8">
            <button
              onClick={handleGoogleSignIn}
              className={`flex items-center justify-center px-4 py-2 text-xs ${darkMode ? "bg-[#0D0D0D]" : "bg-gray-200"} border ${darkMode ? "border-gray-700" : "border-gray-300"} rounded-md w-full transition-transform transform hover:scale-105`}
            >
              <FcGoogle className="text-xl mr-2" />
              <p className="whitespace-nowrap">Sign in with Google</p>
            </button>
            <button
              className={`flex items-center justify-center px-4 py-2 text-xs ${darkMode ? "bg-[#0D0D0D]" : "bg-gray-200"} border ${darkMode ? "border-gray-700" : "border-gray-300"} rounded-md w-full transition-transform transform hover:scale-105`}
            >
              <IoLogoApple className="text-xl mr-2" />
              <p className="whitespace-nowrap">Sign in with Apple</p>
            </button>
          </div>

        
          <div className={`w-full ${darkMode ? "bg-[#0D0D0D]" : "bg-gray-200"} py-6 px-8 rounded-lg mb-8 flex flex-col gap-5 border ${darkMode ? "border-gray-700" : "border-gray-300"}`}>
            <div>
              <label
                htmlFor="email"
                className={`block mb-2 text-sm font-medium ${darkMode ? "text-gray-400" : "text-gray-700"}`}
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                className={`bg-${darkMode ? "[#161616]" : "white"} outline-none ${darkMode ? "text-white" : "text-black"} text-sm rounded-lg block w-full p-2.5 dark:bg-${darkMode ? "[#161616]" : "gray-200"} dark:placeholder-gray-400 focus:border-[#605BFF] focus:ring-2 focus:ring-[#605BFF]`}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className={`block mb-2 text-sm font-medium ${darkMode ? "text-gray-400" : "text-gray-700"}`}
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className={`bg-${darkMode ? "[#161616]" : "white"} outline-none ${darkMode ? "text-white" : "text-black"} text-sm rounded-lg block w-full p-2.5 dark:bg-${darkMode ? "[#161616]" : "gray-200"} dark:placeholder-gray-400 focus:border-[#605BFF] focus:ring-2 focus:ring-[#605BFF]`}
              />
            </div>
            <div>
              <p className="text-[#605BFF] cursor-pointer hover:text-white transition-colors">
                Forgot password?
              </p>
            </div>
            <div>
              <button
                onClick={handleLogin}
                className={`w-full rounded-lg px-4 py-2 ${darkMode ? "bg-[#605BFF]" : "bg-blue-500"} hover:${darkMode ? "bg-[#5058d4]" : "bg-blue-400"} transition-all transform hover:scale-105`}
              >
                Sign In
              </button>
            </div>
          </div>

         
          <div className="text-center mb-8">
            <p className={`text-${darkMode ? "gray-400" : "gray-700"}`}>
              Don’t have an account?{" "}
              <a href="/signup" className="text-[#605BFF] hover:underline">
                Register here
              </a>
            </p>
          </div>

          
          <div
            className="flex justify-between items-center mx-auto"
            style={{
              width: "280px",
              height: "38px",
            }}
          >
            <FaLinkedin size={35} color={darkMode ? "#999999" : "#444444"} />
            <FaDiscord size={35} color={darkMode ? "#999999" : "#444444"} />
            <FaGithub size={35} color={darkMode ? "#999999" : "#444444"} />
            <FaTwitter size={35} color={darkMode ? "#999999" : "#444444"} />
          </div>
        </div>
      </div>
    </div>
  );
}
