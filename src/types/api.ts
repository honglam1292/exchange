import { Device } from "@/enums/device";

export interface ApiPayloadDefault {
  method: string;
  agentId: string;
  signature: string;
  syslang: number;
  device: Device;
}

export interface ApiPayload<T> extends ApiPayloadDefault {
  data: T;
}

export interface ApiResponse {
  status: number;
  msg: string;
}

export interface ApiPaginationResponse<T> extends ApiResponse {
  data: T;
  totalCount: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
}
