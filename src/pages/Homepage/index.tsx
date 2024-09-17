import { Box } from "@mui/material";
// import { useTranslation } from "react-i18next";
import MakeOrder from "./MakeOrder";
import Account from "./Account";
import CurrencyConvert from "./CurrencyConvert";
import TransactionHistory from "./TransactionHistory";

const Homepage = () => {
  // const { t } = useTranslation("homepage");

  return <Box display={"flex"} gap={2} width={"100%"} bgcolor={"#D0D0D0"} height={"100%"} p={1}>
    <Box flex={1} display={"flex"} flexDirection={"column"} gap={1}>
      <Account />
      <CurrencyConvert />
      <TransactionHistory />
    </Box>
    <Box flexBasis={400}><MakeOrder /></Box>
  </Box>;
};

export default Homepage;
