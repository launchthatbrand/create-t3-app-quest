"use client";

import Logo from "./Logo";
import React from "react";
import Searchbar from "./Searchbar";
import SideBarNav from "./SideBarNav";
import UserProfileButton from "./UserProfileButton";
import { useBreakpoint } from "~/hooks/tailwind";
import useSidebarStore from "~/store/store";

function Sidebar({
  showFixed = false,
  navBar,
}: {
  showFixed: boolean;
  navBar: any;
}) {
  const isSidebarActive = useSidebarStore((state) => state.isSidebarActive);
  const isDesktop = useBreakpoint("md");
  console.log("show", showFixed);

  return <div>SIdebar</div>;
}

export default Sidebar;
