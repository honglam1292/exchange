/** @jsxImportSource @emotion/react */

import { useSideBarStore } from "@/stores/sidebarStore";
import { HeaderPageStyle } from "./style";

function HeaderPage() {
  const { open, onOpen } = useSideBarStore();
  return (
    <div css={HeaderPageStyle.index}>
      <div onClick={() => onOpen(!open)} css={HeaderPageStyle.menuBtn(open)}>
        <i className="fa-solid fa-align-right"></i>
      </div>
      <div css={HeaderPageStyle.content}>
        <div className="account">
          <p>Admin</p>
          <p>0.00$</p>
        </div>
        <div className="avatar"></div>
        <div className="down-menu">
          <i className="fa-solid fa-caret-down"></i>
        </div>
      </div>
    </div>
  );
}

export default HeaderPage;
