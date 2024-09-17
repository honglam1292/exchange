import { Box, Button, Input, MenuItem, Select, TextField } from "@mui/material"
import { useTranslation } from "react-i18next";
import exchange from './exchange.png';
import dayjs from "dayjs";
import { useUserToken } from "@/stores/authStore";
import { DepositApi } from "@/api/deposit";
import { ResponseCode } from "@/constants/response";
import { useEffect, useState } from "react";
import { FromCurrency, ToCurrency } from "@/api/deposit/type";

const CurrencyConvert = () => {
  const { t } = useTranslation("homepage");
  const [currencyList, setCurrencyList] = useState<FromCurrency[]>([]);
  const [from, setFrom] = useState<FromCurrency>();
  const [to, setTo] = useState<ToCurrency>();
  const [toList, setToList] = useState<ToCurrency[]>([])
  const [amount, setAmount] = useState<number>()
  const username = useUserToken((state) => state.username);

  const getSettings = async () => {
    const data = { username };
    try {
      const response = await DepositApi.getDepositSetting(data);
      console.log('response', response)
      if (response.status === ResponseCode.SUCCESS) {
        const list = response.data.currencies;
        setCurrencyList(list);
      }
    } catch (error) {
    }
  };
  useEffect(() => {
    getSettings();
  }, []);

  const renderValue = (currency?: ToCurrency | FromCurrency) => {
    if (!currency) return null;
    return <Box display={"flex"} gap={1}>
      <img width={"48px"} src={currency.picture} />
      <Box lineHeight={2}>{currency?.currency_name}</Box>
    </Box>
  }

  const handleChangeFromTo = () => {
    const newFrom = currencyList.find(c => c.currency_id === to?.currency_id);
    const newTo = newFrom?.exchange_rates_list.find(i => i.currency_id === from?.currency_id);
    setFrom(newFrom);
    setTo(newTo);
    setToList(newFrom?.exchange_rates_list || [])
  }

  const valueOf1From = (parseFloat(toList.find(t => t.currency_id === to?.currency_id)?.exchange_rate || "1"))

  const toCurrency = currencyList?.find(c => c.currency_id === to?.currency_id);
  const fromOfTo = toCurrency?.exchange_rates_list.find(i => i.currency_id === from?.currency_id)
  const valueOf1To = (parseFloat(fromOfTo?.exchange_rate || "1"))

  return <Box p={2} borderRadius={1} bgcolor={"white"}>
    <Box display={"flex"} justifyContent={"space-between"} mb={2}>
      <Box flex={1} pr={4}>
        <Box mb={0.5}>{t("amount")}</Box>
        <TextField
          inputProps={{
            style: {
              height: 10,
            },
          }}
          variant="outlined"
          fullWidth
          value={amount}
          onChange={e => setAmount(Number(e.target.value))}
        />
      </Box>
      <Box flex={2} display={"flex"} width={"100%"} gap={1}>
        <Box display={"flex"} flex={1}>
          <Box width={"100%"}>
            <Box mb={1}>{t("from")}</Box>
            <Select
              value={from?.currency_id}
              label="destinationCountry"
              fullWidth
              sx={{ '& legend': { display: 'none' } }}
              renderValue={() => renderValue(from)}
              size='small'
              onChange={e => {
                const id = e.target.value;
                const c = currencyList.find(item => item.currency_id === id)
                setFrom(c)
                setToList(c?.exchange_rates_list || [])
              }}
            >
              {currencyList.map(currency => {
                return <MenuItem value={currency.currency_id}>{currency.currency_name}</MenuItem>

              })}
            </Select>
          </Box>
        </Box>
        <Box flexBasis={24} mt={4} sx={{ cursor: "pointer" }}><img height={"24px"} src={exchange} onClick={handleChangeFromTo} /> </Box>
        <Box flex={1}>
          <Box mb={1}>{t("to")}</Box>
          <Select
            value={to?.currency_id}
            label="destinationCountry"
            fullWidth
            sx={{ '& legend': { display: 'none' } }}
            renderValue={() => renderValue(to)}
            size='small'
            onChange={e => {
              const id = e.target.value;
              const c = toList.find(item => item.currency_id === id)
              setTo(c)
            }}
          >
            {toList.map(currency => {
              return <MenuItem value={currency.currency_id}>{currency.currency_name}</MenuItem>

            })}
          </Select>
        </Box>
      </Box>
    </Box>
    <Box display={"flex"} justifyContent={"space-between"}>
      {amount && from && to ? <Box>
        <Box>{`${amount} ${from?.currency_code} =`}</Box>
        <Box sx={{ fontSize: 16, fontWeight: 700, mt: 0.5 }}>{`${amount * valueOf1From} ${to.currency_code}`}</Box>
        <Box sx={{ ml: 2, fontSize: 12, color: '#C0C0C0', mt: 0.5 }}>
          <Box>1 {from.currency_code} = {valueOf1From} {to.currency_code}</Box>
          <Box >1 {to.currency_code} = {valueOf1To} {from.currency_code}</Box>
        </Box>
      </Box> : <Box></Box>}
      {from && to ? <Box textAlign={"right"}>
        <Box>{from?.currency_code} {t("to").toLowerCase()} {to?.currency_code} {t("wasUpdatedOn")} {dayjs(new Date()).format('MMM DD, YYYY, HH:mm')}  UTC</Box>
        <Button variant="contained" sx={{ mt: 1 }}>{t("query")}</Button>
      </Box> : null}
    </Box>
  </Box >
}

export default CurrencyConvert;