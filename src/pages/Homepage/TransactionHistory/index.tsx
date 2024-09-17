import { Box } from "@mui/material"
import { useTranslation } from "react-i18next";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TransactionHistory = () => {
  const { t } = useTranslation("homepage");
  const mockData = [
    {
      "id": "1",
      "date": "01/01/2021",
      "type": "Type",
      "transferType": "Transfer Type",
      "exchangeRate": "Exchange rate",
      "amount": "1000",
      "fee": "10",
      "status": "Active"
    }
  ]
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
            <TableCell align="center">{t("fee")}</TableCell>
            <TableCell align="center">{t("status")}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mockData.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell align="center"> {row.date} </TableCell>
              <TableCell align="center">{row.type}</TableCell>
              <TableCell align="center">{row.transferType}</TableCell>
              <TableCell align="center">{row.exchangeRate}</TableCell>
              <TableCell align="center">{row.amount}</TableCell>
              <TableCell align="center">{row.fee}</TableCell>
              <TableCell align="center">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
}

export default TransactionHistory;