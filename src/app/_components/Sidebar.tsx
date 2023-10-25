import Logo from "./Logo";
import React from "react";
import SideBarNav from "./SideBarNav";

function Sidebar() {
  return (
    <div className="flex h-screen max-w-xs flex-col space-y-10 overflow-y-auto bg-red-500 p-10 text-center md:min-w-[20rem]">
      <Logo />
      <SideBarNav />
    </div>
  );
}

export default Sidebar;
