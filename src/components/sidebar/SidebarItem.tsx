import React, { useContext } from "react";
import { SidebarContext } from "./Sidebar";

export default function SidebarItem({ icon, text, active, alert }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <li
      className={`
        relative flex items-center py-2 px-2 my-1
        rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-gradient-to-tr from-gray-50 to-gray-300"
            : "hover:bg-green-50 text-gray-600"
        }
    `}
    >
     <span className="text-green-800">{icon}</span> 
      <span
        className={`font-medium  overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        } ${
          active ? "text-green-600" : "text-gray-700"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute text-white right-2 w-4 rounded-full bg-green-900 flex items-center justify-center ${
            expanded ? "" : "top-2"
          }`}
        >
          <span className="text-xs font-semibold"> {alert}</span>
        </div>
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-green-100 
          text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
  );
}
