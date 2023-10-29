"use client";

import Logo from "./Logo";
import React, { type ReactNode } from "react";
import Searchbar from "./Searchbar";
import SideBarNav from "./SideBarNav";
import UserProfileButton from "./UserProfileButton";
import { useBreakpoint } from "~/hooks/tailwind";
import useSidebarStore from "~/store/store";

type Props = {
  showFixed: boolean;
  navBar?: ReactNode;
};

function Sidebar({ showFixed = false, navBar }: Props) {
  const isSidebarActive = useSidebarStore((state) => state.isSidebarActive);
  const isDesktop = useBreakpoint("md");
  console.log("show", showFixed);

  return (
    <aside
      className={`z-50 transform p-5 transition-transform ${
        showFixed ? "md:block" : "md:hidden"
      } ${
        isSidebarActive ? "translate-x-0" : "-translate-x-full"
      } fixed min-h-full w-64 bg-gray-600 md:static md:translate-x-0`}
    >
      {isDesktop ? (
        <>{navBar}</>
      ) : (
        <>
          <Searchbar />

          {navBar}
          {/* <UserProfileButton /> */}
        </>
      )}
    </aside>
  );
}

export default Sidebar;
