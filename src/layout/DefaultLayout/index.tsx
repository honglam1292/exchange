import { ModalGroup } from "@/components/ModalGroup";
import React from "react";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div>
      <Outlet />
      <ModalGroup />
    </div>
  );
};

export default DefaultLayout;
