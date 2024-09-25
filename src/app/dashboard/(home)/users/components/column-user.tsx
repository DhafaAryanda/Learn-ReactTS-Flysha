import type { User } from "@prisma/client";
import type { ColumnDef } from "@tanstack/react-table";

export const column: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "Nama",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "passport",
    header: "Passport",
  },
];
