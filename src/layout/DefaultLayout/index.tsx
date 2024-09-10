/** @jsxImportSource @emotion/react */
import { ModalGroup } from "@/components/ModalGroup";

import HeaderPage from "@/components/HeaderPage";
import SideBarLeft from "@/components/SideBarLeft";
import { Outlet } from "react-router-dom";
import { DefaultLayoutStyle } from "./style";
import { ModalGroup } from "@/components/ModalGroup";

const DefaultLayout = () => {
  return (
    <div css={DefaultLayoutStyle.index}>
      <HeaderPage />
      <div css={DefaultLayoutStyle.content}>
        <SideBarLeft />
        <main css={DefaultLayoutStyle.main()}>
          <Outlet />
        </main>
      </div>
      <ModalGroup />
    </div>
  );
};

export default DefaultLayout;
