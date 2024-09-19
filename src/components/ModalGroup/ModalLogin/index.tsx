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
import { AuthApi } from "@/api/auth";
import { useUserToken } from "@/stores/authStore";
import { useNavigate } from "react-router-dom";
import { ResponseCode } from "@/constants/response";
import { PATH } from "@/constants/path";

export function ModalLogin() {
  const keyModal = useModalStore((state) => state.keyModal);
  const closeModal = useModalStore((state) => state.closeModal);
  const [username, setUserName] = React.useState("linhdang99")
  const [password, setPassword] = React.useState("abcd1234")

  const setUsernameLocale = useUserToken((state) => state.setUsernameLocale);
  const setTokenLocale = useUserToken((state) => state.setTokenLocale);
  const setIsAuth = useUserToken((state) => state.setIsAuth);

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await AuthApi.login({ username, password })

      if (response.status === ResponseCode.SUCCESS) {
        setUsernameLocale(response?.username);
        setTokenLocale(response?.token);
        setIsAuth(true);
        navigate(PATH.home);
        closeModal()
      }

    } catch (error) {
    }
  }

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
          <InputCustom type="text" placeholder="Username" value={username} onChange={e => setUserName(e.target.value)} />

          <InputCustom type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />

          <BtnLogin onClick={handleLogin}>
            <span>Login</span>
          </BtnLogin>
        </FormCustom>

        <Foooter />
      </ModalLoginStyle>
    </Modal>
  );
}
