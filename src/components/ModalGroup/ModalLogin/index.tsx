import { useModalStore } from "@/stores/modalStore";
import { Modal } from "@mui/material";
import * as React from "react";
import {
  BtnLogin,
  Foooter,
  FormCustom,
  Header,
  ModalLoginStyle,
  Welcome,
} from "./style";
import CloseIcon from "@mui/icons-material/Close";
import { InputCustom } from "@/components/InputCustom";

export function ModalLogin() {
  const keyModal = useModalStore((state) => state.keyModal);
  const closeModal = useModalStore((state) => state.closeModal);

  return (
    <Modal
      open={keyModal === "login"}
      onClose={closeModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalLoginStyle>
        <Header>
          <span className="title">Login</span>
          <CloseIcon onClick={closeModal} />
        </Header>

        <Welcome>
          <span>Welcome to Exchange System</span>
        </Welcome>

        <FormCustom>
          <InputCustom type="text" placeholder="Username" />

          <InputCustom type="password" placeholder="Password" />

          <BtnLogin>
            <span>Login</span>
          </BtnLogin>
        </FormCustom>

        <Foooter />
      </ModalLoginStyle>
    </Modal>
  );
}
