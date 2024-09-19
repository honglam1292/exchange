import { payloadHelper } from "@/helper/payloadHelper";
import axiosRequest from "..";
import { GetProfileResponse, LoginBody, LoginResponse } from "./type";

export const AuthApi = {
  async login(payload: LoginBody) {
    const { data } = await axiosRequest.post<LoginResponse>(
      "",
      payloadHelper("MemberLogin", payload.username, payload)
    );
    return data;
  },
  async getProfile(payload: { username: string; }) {
    const response = await axiosRequest.post<GetProfileResponse>(
      "/",
      payloadHelper("MemberDetail", payload.username, payload)
    );
    return response.data;
  },
};
