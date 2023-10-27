"use client";

import { Button } from "./ui/button";
import DarkModeToggle from "./DarkModeToggle";
import { MenuIcon } from "lucide-react";
import React from "react";
import Searchbar from "./Searchbar";
import UserProfileButton from "./UserProfileButton";
import useSidebarStore from "~/store/store";

function Header() {
  const toggleSidebar = useSidebarStore((state) => state.toggleSidebar);
  return (
    <header className="sticky top-0 z-50 flex min-h-[100px] min-w-0 items-center justify-center space-x-3 overflow-auto bg-slate-400 dark:bg-gray-900">
      <Searchbar />

      {/* Mobile Menu Button */}
      <Button onClick={toggleSidebar}>
        <MenuIcon />
      </Button>

      {/* <div className="flex justify-end gap-x-3 bg-red-500">
          <DarkModeToggle />

          <UserProfileButton />
        </div> */}
    </header>
  );
}

export default Header;
