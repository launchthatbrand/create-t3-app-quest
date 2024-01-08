/* eslint-disable @typescript-eslint/require-await */
"use client";
import { DataTable } from "./data-table";
import React, { useEffect, useState } from "react";

import { type User, useColumns } from "./columns";
import { useBreakpoint } from "~/hooks/tailwind";
import { usePathname } from "next/navigation";
import { api } from "~/trpc/react";

// async function getData(): Promise<User[]> {
//   // Fetch data from your API here.
//   return [
//     {
//       id: "728ed52f",
//       amount: 100,
//       status: "pending",
//       email: "m@example.com",
//       name: "John Smith",
//     },
//     {
//       id: "728ed52f",
//       amount: 100,
//       status: "pending",
//       email: "m@example.com",
//       name: "John Smith",
//     },
//     {
//       id: "728ed52f",
//       amount: 100,
//       status: "pending",
//       email: "m@example.com",
//       name: "John Smith",
//     },
//     {
//       id: "728ed52f",
//       amount: 100,
//       status: "pending",
//       email: "m@example.com",
//       name: "John Smith",
//     },
//     // ...
//   ];
// }

function MembersPage() {
  const pathname = usePathname();
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);
  const isDesktop = useBreakpoint("md");
  const columns = useColumns();
  const { data: users, isLoading, isError } = api.user.getAll.useQuery();
  console.log("users", users);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;
  return (
    <div className="container flex w-full flex-col items-center text-center">
      <span>Members Page</span>
      <span>{pathname}</span>
      <div>Current view: {isDesktop ? "Desktop" : "Mobile"}</div>
      <div className="mt-2 w-full flex-1 flex-col space-y-2 rounded-md p-2 shadow-md">
        <DataTable columns={columns} data={users} />
      </div>
    </div>
  );
}

export default MembersPage;
