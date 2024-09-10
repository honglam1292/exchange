/** @jsxImportSource @emotion/react */

import HeaderPage from "@/components/HeaderPage";
import SideBarLeft from "@/components/SideBarLeft";
import { Outlet } from "react-router-dom";
import { DefaultLayoutStyle } from "./style";

const DefaultLayout = () => {
  return (
    <div css={DefaultLayoutStyle.index}>
      <HeaderPage />
      <div css={DefaultLayoutStyle.content}>
        <SideBarLeft />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DefaultLayout;
