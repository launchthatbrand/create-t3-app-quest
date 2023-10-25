import DarkModeToggle from "./DarkModeToggle";
import React from "react";
import Searchbar from "./Searchbar";
import UserProfileButton from "./UserProfileButton";

function Header() {
  return (
    <div className="flex min-h-[100px] w-full flex-1 items-center gap-x-3 bg-slate-300 p-5 text-center">
      {/* SearchBar */}
      <Searchbar />
      {/* DarkModeToggle */}
      <div className="flex justify-end gap-x-3 bg-red-500">
        <DarkModeToggle />
        {/* UserProfileButton */}
        <UserProfileButton />
      </div>
    </div>
  );
}

export default Header;
