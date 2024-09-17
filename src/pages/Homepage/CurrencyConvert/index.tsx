import { Box, Button, Input, MenuItem, Select, TextField } from "@mui/material"
import { useTranslation } from "react-i18next";
import exchange from './exchange.png';
import dayjs from "dayjs";

const CurrencyConvert = () => {
  const { t } = useTranslation("homepage");

  const renderValue = (value: string) => {
    return <Box display={"flex"} gap={1}>
      <img width={"48px"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/320px-Flag_of_the_People%27s_Republic_of_China.svg.png" />
      <Box lineHeight={2}>{value}</Box>
    </Box>
  }

  return <Box p={2} borderRadius={1} bgcolor={"white"}>
    <Box display={"flex"} justifyContent={"space-between"} mb={2}>
      <Box flex={1} pr={4}>
        <Box mb={0.5}>{t("amount")}</Box>
        <TextField
          variant="outlined"
          fullWidth
        />
        <Box mt={1.5}>100$ =</Box>
        <Box sx={{ fontSize: 16, fontWeight: 700, mt: 0.5 }}>1000VND</Box>
        <Box sx={{ ml: 2, fontSize: 12, color: '#C0C0C0', mt: 0.5 }}>
          <Box>1 USD = 23000VND</Box>
          <Box >1 USD = 23000VND</Box>
        </Box>
      </Box>
      <Box flex={2} display={"flex"} width={"100%"} gap={1}>
        <Box display={"flex"} flex={1}>
          <Box width={"100%"}>
            <Box mb={1}>{t("from")}</Box>
            <Select
              value={"US"}
              label="destinationCountry"
              fullWidth
              sx={{ '& legend': { display: 'none' } }}
              renderValue={renderValue}
              size='small'
            >
              <MenuItem value={"US"}>US</MenuItem>
              <MenuItem value={"Viet Nam"}>Viet Nam</MenuItem>
              <MenuItem value={"Chinese"}>Chinese</MenuItem>
            </Select>
          </Box>
        </Box>
        <Box flexBasis={24} mt={4} sx={{ cursor: "pointer" }}><img height={"24px"} src={exchange} /> </Box>
        <Box flex={1}>
          <Box mb={1}>{t("from")}</Box>
          <Select
            value={"US"}
            label="destinationCountry"
            fullWidth
            sx={{ '& legend': { display: 'none' } }}
            renderValue={renderValue}
            size='small'
          >
            <MenuItem value={"US"}>US</MenuItem>
            <MenuItem value={"Viet Nam"}>Viet Nam</MenuItem>
            <MenuItem value={"Chinese"}>Chinese</MenuItem>
          </Select>
        </Box>
      </Box>
    </Box>
    <Box display={"flex"} justifyContent={"space-between"} mt={"-80px"}>
      <Box></Box>
      <Box textAlign={"right"}>
        <Box>USD {t("to")} USD {t("wasUpdatedOn")} {dayjs(new Date()).format('MMM DD, YYYY, HH:mm')}  UTC</Box>
        <Button variant="contained" sx={{ mt: 1 }}>{t("query")}</Button>
      </Box>
    </Box>
  </Box >
}

export default CurrencyConvert;