import { DataTable } from "@/components/ui/data-table";
import type { Metadata } from "next";
import React, { FC } from "react";
import { columns } from "./components/column-ticket";
import { getTickets } from "./lib/data";

export const metadata: Metadata = {
  title: "Dashboard | Tickets",
};

const TicketsPage: FC = async () => {
  const data = await getTickets();
  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <div className="my-5 text-2xl font-bold">Tickets</div>
      </div>
      <DataTable columns={columns} data={data} />
    </>
  );
};

export default TicketsPage;
