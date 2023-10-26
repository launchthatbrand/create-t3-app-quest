/* eslint-disable @typescript-eslint/require-await */
import { DataTable } from "./data-table";
import React from "react";

import { type Payment, columns } from "./columns";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ];
}

async function OrdersPage() {
  const data = await getData();
  return (
    <div className="flex flex-col items-center justify-center p-6">
      Orders Page
      <div className="flex w-full max-w-4xl flex-1 flex-col space-y-2 p-5 shadow-md">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}

export default OrdersPage;
