/* eslint-disable @typescript-eslint/require-await */
"use client";

import { DataTable } from "./data-table";
import React from "react";
import { api } from "~/trpc/react";
import { useBreakpoint } from "~/hooks/tailwind";
import { useColumns } from "./columns";
import { usePathname } from "next/navigation";

function MembersPage() {
  const pathname = usePathname();
  const isDesktop = useBreakpoint("md");
  const columns = useColumns();
  const { data: posts, isLoading, isError } = api.post.getAll.useQuery();
  console.log("posts", posts);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;
  return (
    <div className="items-center justify-center text-center">
      Members Page
      {pathname}
      <div>Current view: {isDesktop ? "Desktop" : "Mobile"}</div>
      <div className="mt-2 flex flex-1 flex-col space-y-2 rounded-md p-2 shadow-md">
        <DataTable columns={columns} data={posts} />
      </div>
    </div>
  );
}

export default MembersPage;
