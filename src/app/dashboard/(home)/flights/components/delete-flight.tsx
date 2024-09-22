"use client";

import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import React, { type FC } from "react";
import { useFormStatus } from "react-dom";
import { deleteFlight } from "../lib/actions";

interface DeleteFlightProps {
  id: string;
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button size="sm" type="submit" disabled={pending} variant={"destructive"}>
      <Trash className="mr-2 h-4 w-4 " /> Hapus
    </Button>
  );
}

const DeleteFlight: FC<DeleteFlightProps> = ({ id }) => {
  const deleteFlightWithId = deleteFlight.bind(null, id);
  return (
    <form action={deleteFlightWithId}>
      <SubmitButton />
    </form>
  );
};

export default DeleteFlight;
