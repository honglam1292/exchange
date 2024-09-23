/** @jsxImportSource @emotion/react */

import { useModalStore } from "@/stores/modalStore";
import { Box, Button } from "@mui/material";

const Login = () => {
  const openModal = useModalStore((state) => state.openModal);

  return (
    <Box sx={{ textAlign: "center", paddingTop: "30vh"}}>
      <Button variant="contained" sx={{ mt: 1, width: 100 }} onClick={() => openModal("login")}>Login</Button>
    </Box>
  );
};

export default Login;
