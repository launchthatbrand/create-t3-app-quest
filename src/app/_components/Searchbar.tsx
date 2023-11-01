import { Input } from "./ui/input";
import React from "react";

type Props = {
  className?: string;
};

function Searchbar({ className }: Props) {
  return (
    <div className={className}>
      <Input
        type="search"
        placeholder="Search..."
        className="md:w-[100px] lg:w-[300px]"
      />
    </div>
  );
}

export default Searchbar;
