/* eslint-disable @typescript-eslint/require-await */
"use client";
import { DataTable } from "./data-table";
import React, { useEffect, useState } from "react";

import { type Payment, useColumns } from "./columns";
import { useBreakpoint } from "~/hooks/tailwind";

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
  const [data, setData] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);
  const isDesktop = useBreakpoint("md");
  const columns = useColumns();

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getData();
        setData(result);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }

    fetchData().catch(console.error);
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  return (
    <div className="items-center justify-center text-center">
      Orders Page
      <div>Current view: {isDesktop ? "Desktop" : "Mobile"}</div>
      <div className="mt-2 flex flex-1 flex-col space-y-2 rounded-md p-2 shadow-md">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}

export default OrdersPage;
