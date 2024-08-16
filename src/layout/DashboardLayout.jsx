import React, { useState, useEffect } from "react";
import { IoHomeOutline, IoSearchOutline } from "react-icons/io5";
import { IoMdAdd, IoMdClose } from "react-icons/io";
import { RiFireLine } from "react-icons/ri";
import { FaHashtag } from "react-icons/fa";
import { CiBookmarkPlus } from "react-icons/ci";
import { MdOutlineExplore } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiChevronLeft } from "react-icons/fi"; 
import { FaSun, FaMoon } from "react-icons/fa"; 
import { Outlet, useNavigate } from "react-router-dom";

const tabs = [
  {
    name: "Dashboard",
    icon: IoHomeOutline,
    location: "/dashboard",
  },
  {
    name: "Upload",
    icon: IoSearchOutline,
    location: "upload",
  },
  {
    name: "Invoice",
    icon: IoMdAdd,
    location: "#",
  },
  {
    name: "Schedule",
    icon: RiFireLine,
    location: "#",
  },
  {
    name: "Calendar",
    icon: MdOutlineExplore,
    location: "#",
  },
  {
    name: "Notification",
    icon: FaHashtag,
    location: "#",
  },
  {
    name: "Settings",
    icon: CiBookmarkPlus,
    location: "#",
  },
];

export default function DashboardLayout() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false); 

  function handleRouting(tab) {
    setActiveTab(tab.name);
    setSidebarOpen(false);
    if (tab.location) {
      navigate(tab.location);
    }
  }

  const toggleTheme = () => {
    setDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div
      className={`w-full h-screen ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      } flex flex-col md:flex-row overflow-hidden transition-colors duration-300`}
    >
      
      <div className="md:hidden flex justify-between items-center p-4 border-b relative">
        <div className="flex items-center">
          {!isSidebarOpen && (
            <GiHamburgerMenu
              onClick={() => setSidebarOpen(true)}
              className="text-2xl cursor-pointer z-50"
            />
          )}
          <p className="text-xl font-semibold ml-4">Base</p>
        </div>
        <div className="flex items-center">
          {isSidebarOpen && (
            <IoMdClose
              onClick={() => setSidebarOpen(false)}
              className="text-2xl cursor-pointer z-50"
            />
          )}
        </div>
      </div>

      
      <div
        className={`w-full md:w-[15%] h-screen border-r ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        } ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out fixed md:relative z-40`}
      >
        <div className="flex flex-col h-full relative">
          <div className="flex items-center justify-between p-4 border-b">
            <p className="text-xl font-semibold">Base</p>
          </div>
          <div className="mt-10 flex flex-col gap-6 overflow-auto flex-grow">
            {tabs.map((tab, index) => (
              <div
                key={index}
                onClick={() => handleRouting(tab)}
                className={`flex cursor-pointer items-center px-4 py-3 md:py-2 hover:bg-gray-800 ${
                  activeTab === tab.name ? "bg-gray-700" : ""
                }`}
              >
                <tab.icon
                  className={`${
                    isDarkMode ? "text-violet-200" : "text-gray-800"
                  } text-2xl md:text-xl`}
                />
                <button className="pl-3 capitalize font-thin text-base md:text-sm overflow-hidden text-ellipsis whitespace-nowrap">
                  {tab.name}
                </button>
              </div>
            ))}
          </div>
          <div className="absolute bottom-4 left-4 flex items-center">
            <FiChevronLeft
              className={`${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              } text-2xl`}
            />
            <button
              onClick={toggleTheme}
              className="ml-2 flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-white dark:bg-gray-200 dark:text-black shadow-lg"
            >
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
      </div>

      
      <div className="w-full md:w-[85%] h-screen md:ml-auto p-4 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}
