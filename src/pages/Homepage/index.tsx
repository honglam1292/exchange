import { Box } from "@mui/material";
// import { useTranslation } from "react-i18next";
import MakeOrder from "./MakeOrder";
import Account from "./Account";
import CurrencyConvert from "./CurrencyConvert";
import TransactionHistory from "./TransactionHistory";
import { useState } from "react";
import { FromCurrency, ToCurrency } from "@/api/deposit/type";

const Homepage = () => {
  // const { t } = useTranslation("homepage");
  const [keyValue, setKeyValue] = useState(0);
  const [fromCurrency, setFromCurrency] = useState<FromCurrency>();
  const [toCurrency, setToCurrency] = useState<ToCurrency>();
  const [sendAmount, setSendAmount] = useState<string | number>();

  const reset = () => {
    setFromCurrency(undefined);
    setToCurrency(undefined);
    setSendAmount(undefined);
    handleReloadCurrencyConvert();
  }

  const handleReloadCurrencyConvert = () => {
    setKeyValue((prevKey) => prevKey + 1); // Increment key to force reload
  };

  return <Box display={"flex"} gap={2} width={"100%"} bgcolor={"#D0D0D0"} height={"100%"} p={1}>
    <Box flex={1} display={"flex"} flexDirection={"column"} gap={1}>
      <Account />
      <CurrencyConvert {...{ setFromCurrency, setToCurrency, setSendAmount }} key={keyValue} />
      <TransactionHistory />
    </Box>
    {fromCurrency && toCurrency ? <Box flexBasis={400}><MakeOrder reset={reset} from={fromCurrency} to={toCurrency} amount={sendAmount} /></Box> : null}
  </Box>;
};

export default Homepage;
