import React from "react";
import TableCard from "~/app/_components/TableCard";

function MembersPage() {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      Members Page
      <div className="flex w-full max-w-4xl flex-1 space-y-2 p-5 shadow-md">
        <TableCard />
      </div>
    </div>
  );
}

export default MembersPage;
