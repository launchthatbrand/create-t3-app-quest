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
/* export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
  name: string;
}; */

type Post = RouterOutputs["post"]["getAll"][number];

export function useColumns(): ColumnDef<Post>[] {
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
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "uuid",
      header: "Post #",
      cell: ({ row }) => {
        const id: string = row.getValue("uuid");
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
        const id: string = row.getValue("uuid");
        const link = `${pathname}/${id}`;

        return (
          <div className="text-left font-medium">
            <Link href={link}>{name}</Link>
          </div>
        );
      },
    },
    {
      accessorKey: "status",
      header: "Status",
    },
    {
      accessorKey: "email",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Email
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
    },
    {
      accessorKey: "amount",
      header: () => <div className="text-right">Amount</div>,
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("amount"));
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(amount);

        return <div className="text-right font-medium">{formatted}</div>;
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
