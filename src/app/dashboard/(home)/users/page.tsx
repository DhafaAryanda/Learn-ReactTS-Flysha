import { DataTable } from "@/components/ui/data-table";
import type { Metadata } from "next";
import React, { FC } from "react";
import { column } from "./components/column-user";
import { getCustomers } from "./lib/data";

export const metadata: Metadata = {
  title: "Dashboard | Users",
};

const UsersPage: FC = async () => {
  const data = await getCustomers();
  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <div className="my-5 text-2xl font-bold">Users</div>
      </div>
      <DataTable columns={column} data={data} />
    </>
  );
};

export default UsersPage;
