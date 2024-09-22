import { Button } from "@/components/ui/button";
import React from "react";
import { useFormStatus } from "react-dom";

export default function SubmitFormButton() {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} className="w-full">
      Submit
    </Button>
  );
}
