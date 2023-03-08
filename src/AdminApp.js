import React, { useState } from 'react';
import { BsArrowLeftShort } from "react-icons/bs";
import { AiOutlineUser} from "react-icons/ai"
import { IoMdClipboard} from "react-icons/io"
import { MdOutlineCreateNewFolder,MdMoreTime} from "react-icons/md"
import { FaUserAlt} from "react-icons/fa"
import { BiLogOut} from "react-icons/bi"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from "./img/36-icon.png"

function AdminApp() {
    const [open, setOpen] = useState(true);
    const Menu = [
        { title: "Project Board" ,icon:<IoMdClipboard></IoMdClipboard>},
        { title: "Create" ,icon:<MdOutlineCreateNewFolder></MdOutlineCreateNewFolder>},
        { title: "User" ,icon:<AiOutlineUser></AiOutlineUser>},
        { title: "Appointment" ,icon:<MdMoreTime></MdMoreTime>},
        { title: "Logout",icon:<BiLogOut></BiLogOut>, spacing: true },
    ];

    return (
        <div className='flex'>
            <div className={`relative bg-purple-700 h-screen p-5 pt-8 duration-300 z-40 ${open ? "w-96" : "w-20"}`}>
                <BsArrowLeftShort className={`absolute bg-white text-black text-3xl top-1/2 bottom-1/2 border border-white rounded-[9999px] cursor-pointer -right-[-10px] ${!open && "rotate-180 duration-300"} `} onClick={() => setOpen(!open) && ""}></BsArrowLeftShort>
                <div className='inline-flex pb-5'>
                     <img src={logo} alt='' className={`bg-none text-4xl rounded cursor-pointer block float-left mr-2 leading-[60px]`}></img> 
                    <h1 className={`text-white origin-left font-medium text-2xl duration-300  ${!open && "scale-0"}`}>ProjectManagement</h1>
                </div>
                <ul className='pt-2'>
                    {Menu.map((menu, index) => (
                        <>
                            <li key={index} className={`flex text-white text-sm item-center gap-x-4 cursor-pointer p-2 hover:text-black hover:bg-slate-200 rounded-[25px]  ${menu.spacing ? "mt-[560px]" : "mt-2"}`}>
                                <span className='text-xl block float-left '>
                                    {menu.icon}
                                </span>
                                <span className={`text-base font-medium flex-1 ${!open && "hidden"}`}>
                                    {menu.title}
                                </span>
                            </li>
                        </>
                    ))}
                </ul>
            </div>



            {/* Page */}
            <div className='flex p-7 w-full border-8 rounded-l-extent z-30'>
                <h5>Go</h5>
            </div>

        </div>
    );
}


export default AdminApp;