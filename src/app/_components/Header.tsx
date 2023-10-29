"use client";

import { Button } from "./ui/button";
import DarkModeToggle from "./DarkModeToggle";
import { MenuIcon } from "lucide-react";
import React from "react";
import Searchbar from "./Searchbar";
import UserProfileButton from "./UserProfileButton";
import { useBreakpoint } from "~/hooks/tailwind";
import useSidebarStore from "~/store/store";

function Header() {
  const isDesktop = useBreakpoint("md");
  const toggleSidebar = useSidebarStore((state) => state.toggleSidebar);
  return (
    <header className="sticky top-0 z-50 flex min-h-[80px] min-w-0 items-center  space-x-3 overflow-auto bg-slate-400 p-5 dark:bg-gray-900">
      <div className="ml-auto flex items-center justify-end space-x-3">
        {isDesktop ? (
          <>
            <Searchbar />
            <UserProfileButton />
          </>
        ) : (
          <>
            <DarkModeToggle />
            <Button className="md:hidden" onClick={toggleSidebar}>
              <MenuIcon />
            </Button>
          </>
        )}
      </div>
      {/* <div className="flex justify-end gap-x-3 bg-red-500">
          <DarkModeToggle />

          <UserProfileButton />
        </div> */}
    </header>
  );
}

export default Header;
