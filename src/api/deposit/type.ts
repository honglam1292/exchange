import { ApiResponse } from "@/types/api";

export type Bank = {
  bank_id: string;
  bank_name: string;
}

export type ToCurrency = {
  currency_id: string;
  currency_name: string;
  currency_code: string;
  currency_symbol: string;
  max_deposit: string;
  min_deposit: string;
  picture: string;
  exchange_rate: string;
}

export type FromCurrency = {
  currency_id: string;
  currency_name: string;
  currency_code: string;
  currency_symbol: string;
  max_deposit: string;
  min_deposit: string;
  picture: string;
  exchange_rates_list: ToCurrency[]
}

export interface OnlineBankChannel {
  bank: string[],
  gateway: string;
  id: string;
  paytype: string[];
  picture: string
}

export interface PlayerBank {
  bank_account_address: string;
  bank_account_name: string;
  bank_account_no: string;
  bank_id: string;
  bank_name: string;
  currency_id: string;
  player_bank_id: string;
  verify: string;
  region: string;
}
export interface DepositType {
  bank: Bank[];
  currencies: FromCurrency[];
  online_banking_channel: OnlineBankChannel[];
  player_bank_deposit_online: PlayerBank[];
}

export interface DepositBody {
  username: string;
  from_currency_id: string;
  to_currency_id: string;
  amount: number | string;
}

export interface DepositResponse extends ApiResponse {
  data: DepositType;
}

export interface GatewayDepositResponse extends ApiResponse {
  data: string;
  msg: string;
  status: number
}

export interface DepositDetailResponse extends ApiResponse {
  data: DepositDetail[];
}

export type DepositDetail = {
  deposit_id: string;
  transaction_code: string;
  created_date: string;
  amount_from: string;
  amount_to: string;
  from_currency_code: string;
  to_currency_code: string;
  to_currency_rate: string;
  bank_name: string;
  bank_account_name: string;
  bank_account_no: string;
  transfer_bill: string;
  remark: string;
  status: string;
  status_name: string;
}
