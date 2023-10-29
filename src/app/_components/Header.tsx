"use client";

import { Button } from "./ui/button";
import DarkModeToggle from "./DarkModeToggle";
import Logo from "./Logo";
import { MenuIcon } from "lucide-react";
import React from "react";
import Searchbar from "./Searchbar";
import UserProfileButton from "./UserProfileButton";
import { useBreakpoint } from "~/hooks/tailwind";
import { useSession } from "next-auth/react";
import useSidebarStore from "~/store/store";

function Header() {
  const { data: session, status } = useSession();
  console.log("headersession", session);
  const isDesktop = useBreakpoint("md");
  const toggleSidebar = useSidebarStore((state) => state.toggleSidebar);
  return (
    <header className="sticky top-0 z-50 flex min-h-[80px] min-w-0 items-center space-x-3 overflow-auto bg-slate-400 p-5 dark:bg-gray-900">
      <div className="flex flex-1 items-center justify-between space-x-3">
        <Logo />
        {isDesktop ? (
          <>
            <Searchbar />
            <UserProfileButton session={session} />
          </>
        ) : (
          <>
            <UserProfileButton session={session} />
            <Button className="md:hidden" onClick={toggleSidebar}>
              <MenuIcon />
            </Button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
