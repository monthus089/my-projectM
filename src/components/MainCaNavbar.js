import { Outlet } from "react-router-dom";
import Search from "./Search";
import React, { useState } from "react";
import { IoMdClipboard } from "react-icons/io";
import { MdMoreTime,MdOutlineCreateNewFolder } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import{GiProgression} from "react-icons/gi"
import { NavLink } from "react-router-dom";
import {
  AiOutlineCaretDown,
  AiOutlineCaretUp,
} from "react-icons/ai";
import {FaUserTie} from "react-icons/fa";
import logo from "../img/36-icon.png";
import { useContext } from "react";
import AuthContext from "./Auth/AuthProvider";
import ChangePass from "./ChangePass";

const MainLayoutAdvisor = () => {
  const { user, logout } = useContext(AuthContext);
  const [open] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenPass, setIsOpenPass] = useState(false);
  const [search, setSearch] = useState("");
  const closeModal = () => {
    setIsOpenPass(false); 
  };
  const handleSearch = (searchValue) => {
    console.log("Search value:", searchValue);
    setSearch(searchValue)
  };
  const Menu = [
    {
      title: "All Projects",
      icon: <IoMdClipboard/>,
      url: "CAllProject",
    },
    {
      title: "My Project",
      icon: <IoMdClipboard/>,
      url: "MyProject",
    },
    {
      title: "Create",
      icon: <MdOutlineCreateNewFolder/>,
      url: "Create",
    },
    {
        title: "Project Progress",
        icon: <GiProgression/>,
        url: "Progress",
      },
    { title: "Appointment", icon: <MdMoreTime/>, url: "Appoint" },
    { title: "Logout", icon: <BiLogOut/>, url: "/", spacing: true },
  ];

  const handleNavLinkClick = (menu) => {
    if (menu.spacing) {
      logout(); // call logout function if spacing is truthy
    }
  };
  return (
    <>
      <div className="flex w-max">
        <div
          className={`relative bg-[#942bc5] h-screen p-5 pt-8 duration-300 z-0 overflow-hidden ${
            open ? "w-96" : "w-20"
          }`}
        >
          <div className="inline-flex pb-5">
            <img
              src={logo}
              alt=""
              className={`bg-none text-4xl rounded cursor-pointer block float-left mr-2 leading-[60px]`}
            ></img>
            <h1
              className={`text-white origin-left font-medium  text-[1.5rem] duration-300 truncate ${
                !open && "scale-0"
              }`}
            >
              Project Management
            </h1>
          </div>
          <ul className="pt-2">
            {Menu.map((menu, index) => {
              
              return (
                <li
                  key={index}
                  className={`flex text-white text-sm item-center gap-x-4 cursor-pointer p-4 mr-14 hover:text-black hover:bg-slate-200 rounded-[25px] last:bg-slate-200 last:text-black ${
                    menu.spacing ? "mt-[400px]" : "mt-2"
                  } `}
                >
                  <NavLink to={menu.url} className={``} onClick={() => handleNavLinkClick(menu)}>
                    <span className="text-xl block float-left ">
                      {menu.icon}
                    </span>
                    <span
                      className={`text-base font-medium flex-1 pl-2 ${
                        !open && "hidden"
                      }`}
                    >
                      {menu.title}
                    </span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="absolute p-0 left-[335px] h-screen w-full border rounded-l-extent bg-white">
        <div className="flex w-full h-[60px]  items-center px-[10px] ">
            <div className="text-[14px] ml-[1280px] text-white flex items-center py-1 px-3 border rounded-extent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br cursor-default outline-none">
              <FaUserTie className="mr-1" />
              <span>COURSE</span>
            </div>
            <div className=" text-[14px] w-[200px] block overflow-hidden">
              <button
                className="text-black bg-none focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
              >
               {user.email} {user.given_name}{" "}
                {!isOpen ? (
                  <AiOutlineCaretDown className="pl-1" />
                ) : (
                  <AiOutlineCaretUp className="pl-1" />
                )}
              </button>
              {isOpen && (
                <div className="absolute text-black bg-gray-100 focus:outline-none font-medium rounded-[10px] text-sm px-8 py-2.5 text-end items-start flex flex-col">
                  <ul>
                    <li
                      className="cursor-pointer"
                      onClick={() => {
                        setIsOpen((prev) => !prev);
                        setIsOpenPass((prev) => !prev);
                      }}
                    >
                      Change Password
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          {isOpenPass ? (
           <ChangePass onClose={closeModal}/>
          ) : null}
          <Outlet searchValue={search}/>
        </div>
      </div>
    </>
  );
};

export default MainLayoutAdvisor;
