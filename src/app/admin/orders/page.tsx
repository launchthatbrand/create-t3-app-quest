/* eslint-disable @typescript-eslint/require-await */
"use client";
import { DataTable } from "./data-table";
import React, { useEffect, useState } from "react";

import { type Payment, useColumns } from "./columns";
import { useBreakpoint } from "~/hooks/tailwind";
import { usePathname } from "next/navigation";
import { api } from "~/trpc/react";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
      name: "John Smith",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
      name: "John Smith",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
      name: "John Smith",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
      name: "John Smith",
    },
    // ...
  ];
}

function OrdersPage() {
  const pathname = usePathname();
  const isDesktop = useBreakpoint("md");
  const columns = useColumns();
  const { data: posts, isLoading, isError } = api.post.getAll.useQuery();
  console.log("posts", posts);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;
  return (
    <div className="container flex w-full flex-col items-center text-center">
      <span>Orders Page</span>
      <span>{pathname}</span>
      <div>Current view: {isDesktop ? "Desktop" : "Mobile"}</div>
      <div className="mt-2 w-full flex-1 flex-col space-y-2 rounded-md p-2 shadow-md">
        <DataTable columns={columns} data={posts} />
      </div>
    </div>
  );
}

export default OrdersPage;
