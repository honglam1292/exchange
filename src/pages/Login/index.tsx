/** @jsxImportSource @emotion/react */

import { useModalStore } from "@/stores/modalStore";
import { Button } from "@mui/material";

const Login = () => {
  const openModal = useModalStore((state) => state.openModal);

  return (
    <div>
      <Button variant="contained" sx={{ mt: 1 }} onClick={() => openModal("login")}>Login</Button>
    </div>
  );
};

export default Login;
