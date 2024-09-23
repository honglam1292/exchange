/** @jsxImportSource @emotion/react */
import { ModalGroup } from "@/components/ModalGroup";

import HeaderPage from "@/components/HeaderPage";
import SideBarLeft from "@/components/SideBarLeft";
import { Outlet } from "react-router-dom";
import { DefaultLayoutStyle } from "./style";
import { useUserToken } from "@/stores/authStore";

const DefaultLayout = () => {
  const isAuth = useUserToken((state) => state.isAuth);

  return (
    <div css={DefaultLayoutStyle.index}>
      {isAuth ? <HeaderPage /> : null}
      <div css={DefaultLayoutStyle.content}>
        {isAuth ? <SideBarLeft /> : null}
        <main css={DefaultLayoutStyle.main()}>
          <Outlet />
        </main>
      </div>
      <ModalGroup />
    </div>
  );
};

export default DefaultLayout;
