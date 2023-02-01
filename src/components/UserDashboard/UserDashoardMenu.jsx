import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuOptions } from "./menuDashboard";
import {BsArrowLeftShort} from "react-icons/bs"
function UserDashoardMenu({ children }) {
  const [open, setOpen] = useState(true);
  const classForLiButtons = `flex rounded-md items-center py-3 ${open ? "pl-8" : "pl-4" } w-full hover:font-bold hover:text-primary hover:cursor-pointer hover:bg-sky`
  return (
    <div className="flex">
      <div className={`${open ? "w-48" : "w-16" } h-screen bg-primary border-t-2 border-white text-white duration-300 relative`}>
        <BsArrowLeftShort onClick={()=>setOpen(!open)} className={`bg-white text-primary text-3xl rounded-full ${!open && "rotate-[180deg]" } duration-500 absolute border border-primary hover:cursor-pointer -top-2 -right-3` }/>
        <ul className=" flex flex-col h-[80vh] my-3 w-full">
          {MenuOptions &&
            MenuOptions.map((item) => (
              <li key={item.buttonName} className={classForLiButtons}>
                <Link to={item.Links}>
                  {item.icon}
                  <span className={`${!open && "hidden"}`}>{item.buttonName}</span>
                </Link>
              </li>
            ))}
        </ul>
      </div>
      {children}
    </div>
  );
}

export default UserDashoardMenu;
