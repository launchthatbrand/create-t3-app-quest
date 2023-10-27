import Logo from "./Logo";
import React from "react";
import SideBarNav from "./SideBarNav";
import useSidebarStore from "~/store/store";

function Sidebar() {
  const isSidebarActive = useSidebarStore((state) => state.isSidebarActive);

  return (
    <div
      className={`fixed left-0 h-full w-64 transform justify-center overflow-auto bg-gray-200 text-center 
        ${isSidebarActive ? "translate-x-0" : "-translate-x-full"} 
        transition-transform duration-300 ease-in-out md:translate-x-0`}
    >
      <SideBarNav />
    </div>
  );
}

export default Sidebar;
