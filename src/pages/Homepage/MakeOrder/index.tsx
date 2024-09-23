import { Box, Button, MenuItem, TextField } from "@mui/material"
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from "react";
import { useTranslation } from "react-i18next";
import downIcon from './down.png';
import { DepositApi } from "@/api/deposit";
import { ResponseCode } from "@/constants/response";
import { useAlert } from "@/hooks/useAlert";
import { useUserToken } from "@/stores/authStore";
import { FromCurrency, ToCurrency } from "@/api/deposit/type";
import Modal from '@mui/material/Modal';
import exchange from '../CurrencyConvert/exchange.png';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
interface IMakeOrder {
  amount?: number | string;
  from: FromCurrency;
  to: ToCurrency;
}
const MakeOrder = ({ amount, from, to }: IMakeOrder) => {
  const { t } = useTranslation("homepage");
  const alert = useAlert();
  const username = useUserToken((state) => state.username);
  const [open, setOpen] = useState(false);

  const [destinationCountry, setDestinationCountry] = useState<string>("US");


  const handleChangeCountry = (event: SelectChangeEvent) => {
    setDestinationCountry(event.target.value as string);
  };

  const submitConvert = async () => {
    if (!amount || !from || !to) {
      return
    }
    const data = {
      username,
      amount,
      from_currency_id: from?.currency_id,
      to_currency_id: to?.currency_id,
    };
    try {
      const response = await DepositApi.submitDeposit(data);
      if (response.status === ResponseCode.SUCCESS) {
        alert.showAlert(response.msg, "success");
      } else {
        alert.showAlert(response.msg, "error")
      }
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        alert.showAlert(error.message, "error");
      }
    } finally {
      setOpen(false);
    }
  };
  const renderValue = (currency?: ToCurrency | FromCurrency) => {
    if (!currency) return null;
    return <Box display={"flex"} gap={1} mb={0.5}>
      <img width={"48px"} src={currency.picture} />
      <Box lineHeight={2}>{currency?.currency_name}</Box>
    </Box>
  }
  const rate = Number(from?.exchange_rates_list.find(c => c.currency_id === to?.currency_id)?.exchange_rate) || 0

  const renderValueCurrency = (isFrom?: boolean) => {
    const currency = isFrom ? from : to;
    return <Box display={"flex"} justifyContent={"space-between"}>
      <Box display={"flex"} gap={1}>
        <img width={"48px"} src={currency?.picture} />
        <Box lineHeight={2}>{currency?.currency_code}</Box>
      </Box>
      <Box display={"flex"} gap={1} mr={-2.5}>
        <Box pt={0.5}><img height={"24px"} src={downIcon} /> </Box>
        <Box lineHeight={2}>{currency?.currency_symbol} {isFrom ? amount : Number(amount) * Number(rate)}</Box>
      </Box>
    </Box>
  }


  return <Box p={2} borderRadius={1} bgcolor={"white"} height={"100%"} width={"100%"}>
    <Box mb={1} mt={2}>{t("transfer")}</Box>
    <Select
      value={destinationCountry}
      label="destinationCountry"
      onChange={handleChangeCountry}
      fullWidth
      sx={{ '& legend': { display: 'none' } }}
      renderValue={() => renderValueCurrency(true)}
      IconComponent={() => null}
      size='small'
    >
      {/* <MenuItem value={"us"}>US</MenuItem>
      <MenuItem value={"vn"}>Viet Nam</MenuItem>
      <MenuItem value={"cn"}>Chinese</MenuItem> */}
    </Select>

    <Box mb={1} mt={2}>{t("collection")}</Box>
    <Select
      value={destinationCountry}
      label="destinationCountry"
      onChange={handleChangeCountry}
      fullWidth
      sx={{ '& legend': { display: 'none' } }}
      renderValue={() => renderValueCurrency()}
      IconComponent={() => null}
      size='small'
    >
      {/* <MenuItem value={"us"}>US</MenuItem>
      <MenuItem value={"vn"}>Viet Nam</MenuItem>
      <MenuItem value={"cn"}>Chinese</MenuItem> */}
    </Select>

    <Box display={"flex"} justifyContent={"space-between"} mt={3}>
      <Box>{t("currencyExchangeRate")}:</Box>
      <Box>{rate * 100}%</Box>
    </Box>
    <Box display={"flex"} justifyContent={"space-between"} my={0.5}>
      <Box>{t("reviewDate")}:</Box>
      <Box>0.00</Box>
    </Box>
    <Box display={"flex"} justifyContent={"space-between"} mb={2}>
      <Box>{t("totalLimit")}:</Box>
      <Box>usually 3 working days</Box>
    </Box>
    <Box borderTop={"1px solid #D0D0D0"} mx={2} display={"flex"} justifyContent={"space-between"} pt={1.5}>
      <Box>
        {t("totalAmount")}
        <Box>$1000,000</Box>
      </Box>
      <Box>
        <Button variant="contained" onClick={() => setOpen(true)}>{t("submitRequest")}</Button>
      </Box>
    </Box>
    <Modal
      open={open}
      onClose={() => setOpen(false)}
    >
      <Box sx={style}>
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
                disabled
                style={{
                  height: 48,
                }}
              >
                <MenuItem value={from.currency_id}>{from.currency_name}</MenuItem>
              </Select>
            </Box>
          </Box>
          <Box flexBasis={24} mt={4} sx={{ cursor: "pointer" }}><img height={"24px"} src={exchange} /> </Box>
          <Box flex={1}>
            <Box mb={1}>{t("to")}</Box>
            <Select
              style={{
                height: 48,
              }}
              value={to?.currency_id}
              label="destinationCountry"
              fullWidth
              sx={{ '& legend': { display: 'none' } }}
              renderValue={() => renderValue(to)}
              size='small'
              disabled
            >
              <MenuItem value={to.currency_id}>{to.currency_name}</MenuItem>
            </Select>
          </Box>
        </Box>
        <Box flex={1} mt={2}>
          <Box mb={0.5}>{t("conversionAmount")}</Box>
          <TextField
            inputProps={{
              style: {
                height: 20,
              },
            }}
            variant="outlined"
            fullWidth
            value={`${from.currency_symbol} ${amount}`}
            disabled
          />
        </Box>
        <Box flex={1} mt={2}>
          <Box mb={0.5}>{t("exchangeRate")}</Box>
          <TextField
            inputProps={{
              style: {
                height: 20,
              },
            }}
            variant="outlined"
            fullWidth
            value={rate}
            disabled
          />
        </Box>
        <Box sx={{ borderTop: "1px solid #F0F0F0", my: 3 }} />
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box>
            <Box>{t("totalLimit")}</Box>
            <Box>$1000.000</Box>
          </Box>
          <Box>
            <Button variant="contained" onClick={submitConvert}>{t("submitRequest")}</Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  </Box>
}

export default MakeOrder;