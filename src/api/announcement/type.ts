import { ApiResponse } from "@/types/api";

export interface AnnouncementFormType {
  page?: number;
  size?: number;
}

export interface AnnoucementItem {
  id: string;
  title: string;
  content: string;
  start: string;
  end: string;
}

export interface AnnouncementHomeResponse extends ApiResponse {
  data: AnnoucementItem[];
  currentPage: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
}
