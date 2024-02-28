// DefaultLayout.js
import React from 'react';
import SidebarItem from '../components/sidebar/SidebarItem';
import Sidebar from '../components/sidebar/Sidebar';
import { FiHome, FiMessageCircle ,FiUserPlus,FiUsers,FiUser, FiArchive} from "react-icons/fi";


export default function DefaultLayout() {
  return (
    <>
            <Sidebar>
                <SidebarItem icon={<FiHome />} text={"Dashboard"}  />
                <SidebarItem icon={<FiUsers />} text={"People"} />
                <SidebarItem icon={<FiMessageCircle/>} text={"Messages"} alert="2" active/>
                <SidebarItem icon={<FiUserPlus/>} text={"Groups"} />
                <div className="border-b shadow m-1" />
                <SidebarItem icon={<FiArchive/>} text={"Giving"} />
                <SidebarItem icon={<FiUser/>} text={"My Profile"} />
            </Sidebar>
    </>
  );
};
