/** @jsxImportSource @emotion/react */

import { useSideBarStore } from "@/stores/sidebarStore";
import { useEffect, useRef } from "react";
import { SideBarLeftStyle } from "./style";

function SideBarLeft() {
  const { open } = useSideBarStore();
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!listRef.current) return;
    if (open) {
      setTimeout(() => {
        if (!listRef.current) return;
        listRef.current.style.display = "block";
      }, 100);
    } else {
      listRef.current.style.display = "none";
    }
  }, [open]);
  return (
    <div ref={containerRef} css={SideBarLeftStyle.index(open)}>
      <div ref={listRef} className="list-menu" css={SideBarLeftStyle.listMenu}>
        <div className="account-detail">账号详情</div>
        <div className="account-detail">用户信息</div>
      </div>
    </div>
  );
}

export default SideBarLeft;
