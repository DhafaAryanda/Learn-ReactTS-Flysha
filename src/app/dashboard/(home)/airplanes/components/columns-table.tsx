"use client";

import { Button } from "@/components/ui/button";
import type { Airplane } from "@prisma/client";
import type { ColumnDef } from "@tanstack/react-table";
import { Pencil } from "lucide-react";
import Link from "next/link";

export const columns: ColumnDef<Airplane>[] = [
  {
    accessorKey: "image",
    header: "Image",
  },
  {
    accessorKey: "code",
    header: "Code",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const plane = row.original;

      return (
        <div className="inline-flex gap-5 items-center">
          <Button variant="secondary" size="sm" asChild>
            <Link href={"/dashboard/airplane/edit/${plane.id}"}>
              <Pencil className="mr-2 w-4 h-4" /> Edit
            </Link>
          </Button>
        </div>
      );
    },
  },
];
