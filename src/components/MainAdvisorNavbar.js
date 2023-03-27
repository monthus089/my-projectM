import { Outlet } from "react-router-dom";
import Search from "./Admin/Search";
import React, { useState } from "react";
import { IoMdClipboard } from "react-icons/io";
import { MdMoreTime,MdOutlineCreateNewFolder } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import{GiProgression} from "react-icons/gi"
import { Link } from "react-router-dom";

import logo from "../img/36-icon.png";

const MainLayoutAdvisor = () => {
  const [open] = useState(true);
  const Menu = [
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
    { title: "Logout", icon: <BiLogOut/>, url: "", spacing: true },
  ];
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
                    menu.spacing ? "mt-[500px]" : "mt-2"
                  } `}
                >
                  <Link to={menu.url} className={``}>
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
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="absolute p-0 left-[335px] h-screen w-full border rounded-l-extent bg-white">
          <div className="flex w-full h-[60px]  items-center px-[10px] ">
            <Search />
            <div className="text-[14px] ml-[350px]">
              <span className="">Monthat Muensaeng</span> {/*ชื่อผู้ใช้ */}
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayoutAdvisor;
