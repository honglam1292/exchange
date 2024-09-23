/** @jsxImportSource @emotion/react */

import { useSideBarStore } from "@/stores/sidebarStore";
import { useEffect, useRef } from "react";
import { SideBarLeftStyle } from "./style";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { PATH } from "@/constants/path";

function SideBarLeft() {
  const { open } = useSideBarStore();
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation("homepage");
  const navigate = useNavigate();

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
        <Box onClick={() => navigate(PATH.inforUser)} className="account-detail" sx={{ cursor: "pointer" }}>{t("accountDetails")}</Box>
        <Box onClick={() => navigate(PATH.home)} className="account-detail" sx={{ cursor: "pointer" }}>{t("currencyExchange")}</Box>
      </div>
    </div>
  );
}

export default SideBarLeft;
