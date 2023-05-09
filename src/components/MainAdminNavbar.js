import { Outlet } from "react-router-dom";
import Search from "./Admin/Search";
import React, { useContext, useState } from "react";
import {
  AiOutlineCaretDown,
  AiOutlineUser,
  AiOutlineCaretUp,
} from "react-icons/ai";
import { IoMdClipboard } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";
import { NavLink } from "react-router-dom";

import logo from "../img/36-icon.png";
import AuthContext from "./Auth/AuthProvider";
import ChangePass from "./ChangePass";

const MainLayoutAdmin = () => {
  const { user, logout } = useContext(AuthContext);
  const [open] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenPass, setIsOpenPass] = useState(false);
  const closeModal = () => {
    setIsOpenPass(false); 
  };
  const Menu = [
    {
      title: "Project Board",
      icon: <IoMdClipboard></IoMdClipboard>,
      url: "Board",
    },
    { title: "User", icon: <AiOutlineUser></AiOutlineUser>, url: "Role" },
    { title: "Logout", icon: <BiLogOut></BiLogOut>, url: "/", spacing: true },
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
                  className={`flex text-white text-sm item-center gap-x-4 cursor-pointer p-4 mr-14 hover:text-black hover:bg-slate-200 rounded-[25px] active:bg-slate-200 last:bg-slate-200 last:text-black ${
                    menu.spacing ? "mt-[612px]" : "mt-2"
                  } `}
                >
                  <NavLink
                    to={menu.url}
                    className={``}
                    onClick={() => handleNavLinkClick(menu)}
                  >
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
            <Search />
            <div className=" text-[14px] ml-[300px]">
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

          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayoutAdmin;
