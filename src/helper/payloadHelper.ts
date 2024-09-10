/* eslint-disable @typescript-eslint/no-explicit-any */
import { LOCAL, sysLang } from "@/constants/common";
import { Device } from "@/enums/device";
import { ApiPayload } from "@/types/api";
import md5 from "md5";

const agentId = import.meta.env.VITE_AGENT_ID as string;
const secretKey = import.meta.env.VITE_SECRET_KEY as string;

const hashSignature = (typeName: string | null) =>
  typeName ? md5(agentId + typeName + secretKey) : md5(agentId + secretKey);
const keyLang = localStorage.getItem(LOCAL.i18nLng) || "en";

const syslanguage = sysLang[keyLang];

export const payloadHelper = (
  methodName: string,
  typeName: string | null,
  data: any
) => {
  const payload: ApiPayload<any> = {
    agentId,
    signature: hashSignature(typeName),
    data,
    method: methodName,
    syslang: syslanguage,
    device: Device.WEB,
  };

  if (!data) {
    delete payload["data"];
  }

  return payload;
};
