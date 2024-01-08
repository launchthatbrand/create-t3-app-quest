"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/app/_components/ui/dropdown-menu";

import { Button } from "~/app/_components/ui/button";
import { type ColumnDef } from "@tanstack/react-table";
import { ArrowRight, ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Checkbox } from "~/app/_components/ui/checkbox";
import { useBreakpoint } from "~/hooks/tailwind";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type RouterOutputs } from "~/trpc/shared";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
// export type Payment = {
//   id: string;
//   amount: number;
//   status: "pending" | "processing" | "success" | "failed";
//   email: string;
//   name: string;
// };

export type User = RouterOutputs["user"]["getAll"][number];

export function useColumns(): ColumnDef<User>[] {
  const isDesktop = useBreakpoint("md");
  const pathname = usePathname();

  return [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          className="mb-12 md:mb-0"
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      id: "mobile",
      header: "Users Info",
      cell: ({ row }) => {
        const id: string = row.getValue("id");
        const name: string = row.getValue("name");
        const email: string = row.getValue("email");
        return (
          <>
            <div className="flex flex-col space-y-1">
              <span className="text-left text-xs">
                <strong>ID:</strong> {id}
              </span>
              <span className="text-left">
                <strong>Name:</strong> {name}
              </span>
              <span className="text-left">
                <strong>Email:</strong> {email}
              </span>
              <Button className="self-end px-2 text-xs leading-3">
                <ArrowRight />
              </Button>
            </div>
          </>
        );
      },
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "id",
      header: "User ID",
      cell: ({ row }) => {
        const id: string = row.getValue("id");
        const link = `${pathname}/${id}`;

        return (
          <div className="text-left font-medium">
            <Link href={link}>{id}</Link>
          </div>
        );
      },
    },
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => {
        const name: string = row.getValue("name");

        return <div className="text-left">{name}</div>;
      },
    },
    {
      accessorKey: "email",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            className="p-0 text-left"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Email
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const email: string = row.getValue("email");

        return <div className="text-left">{email}</div>;
      },
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const payment = row.original;
        return (
          <div className="flex justify-end">
            {isDesktop ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4 text-right " />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem
                    onClick={() => navigator.clipboard.writeText(payment.id)}
                  >
                    Copy payment ID
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>View customer</DropdownMenuItem>
                  <DropdownMenuItem>View payment details</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button className="px-2">
                <ArrowRight />
              </Button>
            )}
          </div>
        );
      },
    },
  ];
}
