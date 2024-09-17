import { payloadHelper } from "@/helper/payloadHelper";
import axiosRequest from "..";
import { DepositBody, DepositResponse, GatewayDepositResponse } from "./type";

export const DepositApi = {
  async deposit(payload: DepositBody) {
    const { data } = await axiosRequest.post<DepositResponse>(
      "",
      payloadHelper("Deposit", payload.username, payload)
    );
    return data;
  },
  async gatewayDeposit(payload: DepositBody) {
    const { data } = await axiosRequest.post<GatewayDepositResponse>(
      "",
      payloadHelper("GatewayDeposit", payload.username, payload)
    );
    return data;
  },
  async getDepositSetting(payload: { username: string }) {
    const { data } = await axiosRequest.post<DepositResponse>(
      "",
      payloadHelper("DepositForm", payload.username, payload)
    );
    return data;
  },
};
