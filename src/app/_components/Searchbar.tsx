import { Input } from "./ui/input";
import React from "react";

function Searchbar() {
  return (
    <div>
      <Input
        type="search"
        placeholder="Search..."
        className="md:w-[100px] lg:w-[300px]"
      />
    </div>
  );
}

export default Searchbar;
