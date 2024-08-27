import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Metadata } from "next";
import React, { FC } from "react";
import { ActionResult, handleSignIn } from "./form/actions";
import { useFormState } from "react-dom";
import FormSignIn from "./form";
import { getUser } from "@/lib/auth";
import { redirect } from "next/navigation";

interface SignInPageProps {}

export const metadata: Metadata = {
  title: "Dashboard | Sign In",
};

const SignInPages = async () => {
  const { session, user } = await getUser();

  if (session && user.role === "ADMIN") {
    redirect("/dashboard");
  }

  return <FormSignIn />;
};

export default SignInPages;
