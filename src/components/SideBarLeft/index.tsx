/** @jsxImportSource @emotion/react */

import { useSideBarStore } from "@/stores/sidebarStore";
import { SideBarLeftStyle } from "./style";
import { useEffect, useRef } from "react";

function SideBarLeft() {
  const { open } = useSideBarStore();
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (open) {
      if (containerRef.current) {
        containerRef.current.style.transform = "translateX(-200px)";
        setTimeout(() => {
          if (!containerRef.current) return;
          containerRef.current.style.display = "none";
        }, 250);
      }
    } else {
      if (containerRef.current) {
        containerRef.current.style.display = "flex";
        setTimeout(() => {
          if (!containerRef.current) return;
          containerRef.current.style.transform = "translateX(0px)";
        }, 50);
      }
    }
  }, [open]);
  return (
    <div ref={containerRef} css={SideBarLeftStyle.index()}>
      <div css={SideBarLeftStyle.listMenu}>
        <div className="account-detail">账号详情</div>
      </div>
    </div>
  );
}

export default SideBarLeft;
