import { useUserToken } from "@/stores/authStore";
import { Box } from "@mui/material"
import { useTranslation } from "react-i18next";

const Account = () => {
  const { t } = useTranslation("homepage");
  const username = useUserToken((state) => state.username);

  return <Box px={2} py={2} borderRadius={1} bgcolor={"white"} display={"flex"}>
    <Box display={"flex"} gap={2} flex={1}>
      <Box
        width="3rem"
        height="3rem"
        bgcolor={"#d0d0d0"}
        borderRadius={"3rem"}
      >
      </Box>
      <Box lineHeight={"1.2rem"}>
        <Box mt="0.3rem">
          {t("accountName")}
        </Box>
        <Box>
          {username}
        </Box>
      </Box>
    </Box>
    <Box flex={1} lineHeight={"1.5rem"} fontWeight={700}>
      <Box>
        {t("accountBalance")}
      </Box>
      <Box>
        $ 1500,000
      </Box>
    </Box>
  </Box>
}

export default Account;