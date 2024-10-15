/** @jsxImportSource @emotion/react */

import { useModalStore } from "@/stores/modalStore";
import { Box } from "@mui/material";
import { useEffect } from "react";

const Login = () => {
  const openModal = useModalStore((state) => state.openModal);
  useEffect(() => {
    openModal("login")
  }, [])
  return (
    <Box sx={{ textAlign: "center", paddingTop: "30vh" }}>
      {/* <Button variant="contained" sx={{ mt: 1, width: 100 }} onClick={() => openModal("login")}>Login</Button> */}
    </Box>
  );
};

export default Login;
