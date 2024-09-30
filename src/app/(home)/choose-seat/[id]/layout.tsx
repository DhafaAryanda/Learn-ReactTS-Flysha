"use client";

import { type ReactNode, type FC } from "react";
import SeatProvider from "./providers/seat-provider";
import { Toaster } from "@/components/ui/toaster";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <SeatProvider>
      {children} <Toaster />
    </SeatProvider>
  );
};

export default Layout;
