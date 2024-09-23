import { Box } from "@mui/material"
import { useTranslation } from "react-i18next";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from "react";
import { DepositApi } from "@/api/deposit";
import { ResponseCode } from "@/constants/response";
import { useUserToken } from "@/stores/authStore";
import { DepositDetail } from "@/api/deposit/type";
import dayjs from "dayjs";

const TransactionHistory = () => {
  const { t } = useTranslation("homepage");
  const [depositList, setDesopotList] = useState<DepositDetail[]>([]);
  const username = useUserToken((state) => state.username);

  const getData = async () => {
    const data = { username };
    try {
      const response = await DepositApi.getDepositList(data);
      if (response.status === ResponseCode.SUCCESS) {
        const list = response.data;
        setDesopotList(list);
      }
    } catch (error) {
    }
  };
  console.log('depositList1', depositList)

  useEffect(() => {
    getData()
  }, [])

  return <Box p={2} borderRadius={1} bgcolor={"white"}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">{t("date")}</TableCell>
            <TableCell align="center">{t("type")}</TableCell>
            <TableCell align="center">{t("transferType")}</TableCell>
            <TableCell align="center">{t("exchangeRate")}</TableCell>
            <TableCell align="center">{t("amount")}</TableCell>
            <TableCell align="center">{t("status")}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {depositList.map((row) => (
            <TableRow
              key={row.deposit_id}
            >
              <TableCell align="center"> {dayjs(row.created_date).format('DD/MM/YYYY')} </TableCell>
              <TableCell align="center">Transfer</TableCell>
              <TableCell align="center">{row.from_currency_code} - {row.to_currency_code}</TableCell>
              <TableCell align="center">{row.to_currency_rate}</TableCell>
              <TableCell align="center">{row.amount_from}</TableCell>
              <TableCell align="center">{row.status_name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
}

export default TransactionHistory;