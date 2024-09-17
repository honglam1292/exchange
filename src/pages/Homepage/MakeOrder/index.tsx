import { Box, Button } from "@mui/material"
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from "react";
import MenuItem from '@mui/material/MenuItem';
import { useTranslation } from "react-i18next";
import downIcon from './down.png';

const MakeOrder = () => {
  const { t } = useTranslation("homepage");
  const [destinationCountry, setDestinationCountry] = useState<string>("US");
  const handleChangeCountry = (event: SelectChangeEvent) => {
    setDestinationCountry(event.target.value as string);
  };

  const renderValue = (value: string) => {
    return <Box display={"flex"} gap={1}>
      <img width={"48px"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/320px-Flag_of_the_People%27s_Republic_of_China.svg.png" />
      <Box lineHeight={2}>{value}</Box>
    </Box>
  }

  const renderValueCurrency = (value: string) => {
    return <Box display={"flex"} justifyContent={"space-between"}>
      <Box display={"flex"} gap={1}>
        <img width={"48px"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/320px-Flag_of_the_People%27s_Republic_of_China.svg.png" />
        <Box lineHeight={2}>{value}</Box>
      </Box>
      <Box display={"flex"} gap={1} mr={-2.5}>
        <Box pt={0.5}><img height={"24px"} src={downIcon} /> </Box>
        <Box lineHeight={2}>$1000,000</Box>
      </Box>
    </Box>
  }


  return <Box p={2} borderRadius={1} bgcolor={"white"} height={"100%"} width={"100%"}>
    <Box mb={1}>{t("destinationCountry")}</Box>
    <Select
      value={destinationCountry}
      label="destinationCountry"
      onChange={handleChangeCountry}
      fullWidth
      sx={{ '& legend': { display: 'none' } }}
      renderValue={renderValue}
      size='small'
    >
      <MenuItem value={"US"}>US</MenuItem>
      <MenuItem value={"Viet Nam"}>Viet Nam</MenuItem>
      <MenuItem value={"Chinese"}>Chinese</MenuItem>
    </Select>

    <Box mb={1} mt={2}>{t("transfer")}</Box>
    <Select
      value={destinationCountry}
      label="destinationCountry"
      onChange={handleChangeCountry}
      fullWidth
      sx={{ '& legend': { display: 'none' } }}
      renderValue={renderValueCurrency}
      IconComponent={() => null}
      size='small'
    >
      <MenuItem value={"us"}>US</MenuItem>
      <MenuItem value={"vn"}>Viet Nam</MenuItem>
      <MenuItem value={"cn"}>Chinese</MenuItem>
    </Select>

    <Box mb={1} mt={2}>{t("collection")}</Box>
    <Select
      value={destinationCountry}
      label="destinationCountry"
      onChange={handleChangeCountry}
      fullWidth
      sx={{ '& legend': { display: 'none' } }}
      renderValue={renderValueCurrency}
      IconComponent={() => null}
      size='small'
    >
      <MenuItem value={"us"}>US</MenuItem>
      <MenuItem value={"vn"}>Viet Nam</MenuItem>
      <MenuItem value={"cn"}>Chinese</MenuItem>
    </Select>

    <Box display={"flex"} justifyContent={"space-between"} mt={3}>
      <Box>{t("currencyExchangeRate")}:</Box>
      <Box>0.00%</Box>
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
        <Button variant="contained">{t("submitRequest")}</Button>
      </Box>
    </Box>
  </Box>
}

export default MakeOrder;