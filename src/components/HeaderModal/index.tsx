import React from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import theme from "@/styles/theme";
import { HeaderModalStyle } from "./index.style";
import { useModalStore } from "@/stores/modalStore";
interface Props {
  title: string;
}
export const HeaderModal: React.FC<Props> = ({ title }) => {
  const closeModal = useModalStore((state) => state.closeModal);

  return (
    <HeaderModalStyle>
      <div className="closeIcon">
        <CloseRoundedIcon
          sx={{ color: theme.color.blue }}
          onClick={closeModal}
        />
      </div>
      <div className="header">
        <span>{title}</span>
      </div>
    </HeaderModalStyle>
  );
};
