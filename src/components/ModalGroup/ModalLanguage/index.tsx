// ModalRule.js

/** @jsxImportSource @emotion/react */

import { HeaderModal } from "@/components/HeaderModal";
import { useModalStore } from "@/stores/modalStore";
import theme from "@/styles/theme";
import { Box, Modal } from "@mui/material";
import { ModalConfirmStyle } from "./index.style";
import { LIST_LANGUAGE } from "@/constants/list-language";
import clsx from "clsx";
import { i18n } from "@/i18n";
import { useTranslation } from "react-i18next";
import { LOCAL } from "@/constants/common";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  // width: "100%",
  height: "228px",
  width: "330px",
  background: "#fff",
  // marginLeft: "-220px",
  // marginTop: "-90px",
  borderRadius: "6px",
};

export const ModalLanguage = () => {
  const { t } = useTranslation(["language"]);
  const keyModal = useModalStore((state) => state.keyModal);
  const closeModal = useModalStore((state) => state.closeModal);
  const keyLang = localStorage.getItem(LOCAL.i18nLng);

  const handleChangeLanguage = (id: string) => {
    i18n.changeLanguage(id);
    localStorage.setItem(LOCAL.i18nLng, id);
    closeModal();
  };

  return (
    <Modal
      open={keyModal === "language"}
      onClose={closeModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      slotProps={{
        backdrop: {
          sx: {
            background: theme.bg.black08,
          },
        },
      }}
    >
      <ModalConfirmStyle>
        <Box sx={style}>
          <HeaderModal title={t("Language")} />
          <div className="listLanguage">
            {LIST_LANGUAGE.map((item, index) => {
              const className = clsx({
                itemLanguage: true,
                itemSelect: keyLang === item.id,
              });
              return (
                <div
                  className={className}
                  key={`${item.id}-${index}`}
                  onClick={() => handleChangeLanguage(item.id)}
                >
                  <img alt="" src={item.img} />
                  <span>{item.name}</span>
                </div>
              );
            })}
          </div>
        </Box>
      </ModalConfirmStyle>
    </Modal>
  );
};
