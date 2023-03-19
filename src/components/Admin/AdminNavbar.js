import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { IoMdClipboard } from "react-icons/io";
import { MdOutlineCreateNewFolder, MdMoreTime } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";

import logo from "./img/36-icon.png";
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";

import Board from "./Board";
import Search from "./Search";
import Details from "./Details";
import RoleBoard from "./RoleBoard";

function AdminApp() {
  const [open] = useState(true);
  const Menu = [
    {
      title: "Project Board",
      icon: <IoMdClipboard></IoMdClipboard>,
      url: "/",
    },
    {
      title: "Create",
      icon: <MdOutlineCreateNewFolder></MdOutlineCreateNewFolder>,
      url: "/Create",
    },
    { title: "User", icon: <AiOutlineUser></AiOutlineUser>, url: "/Role" },
    { title: "Appointment", icon: <MdMoreTime></MdMoreTime>, url: "" },
    { title: "Logout", icon: <BiLogOut></BiLogOut>, url: "", spacing: true },
  ];

  return (
    <div className="flex w-max">
      <div
        className={`relative bg-[#942bc5] h-screen p-5 pt-8 duration-300 z-0 overflow-hidden ${
          open ? "w-96" : "w-20"
        }`}
      >
        {/* <BsArrowLeftShort className={`absolute bg-white text-black text-3xl urlp-1/2 boturlm-1/2  border border-white rounded-[9999px] cursor-pointer -right-[-50px] ${!open && "rotate-180"} `} onClick={() => seurlpen(!open) && ""}></BsArrowLeftShort> */}
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
                  menu.spacing ? "mt-[500px]" : "mt-2"
                } `}
              >
                {/* <Link to={menu.url}> */}
                <span className="text-xl block float-left ">{menu.icon}</span>
                <span
                  className={`text-base font-medium flex-1 ${
                    !open && "hidden"
                  }`}
                >
                  {menu.title}
                </span>
                {/* </Link> */}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Page */}

      <div className="absolute p-0 left-[335px] h-screen w-full border rounded-l-extent bg-white">
        <div className="flex w-full h-[60px]  items-center px-[10px] ">
          <Search />
          <div className="text-[14px] ml-[350px]">
            <span className="">Monthat Muensaeng</span> {/*ชื่อผู้ใช้ */}
          </div>
        </div>
        <Outlet/>
      </div>
    </div>
  );
}

export default AdminApp;
