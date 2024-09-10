import { payloadHelper } from "@/helper/payloadHelper";
import { AnnouncementHomeResponse } from "./type";
import { ResponseCode } from "@/constants/response";
import axiosRequest from "..";

export const AnnouncementAPI = {
  getAnnouncement: async () => {
    try {
      const res = await axiosRequest.post<AnnouncementHomeResponse>(
        "/",
        payloadHelper("Announcement", null, null)
      );
      if (res.data.status === ResponseCode.SUCCESS) {
        return res.data;
      }
      throw new Error(res.data.msg);
    } catch (error) {
      throw new Error(error + "");
    }
  },
};
