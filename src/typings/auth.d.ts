import { AsideMenuLevel, AsideMenuStatus } from "@/constant/aside-menu";

export interface AuthBo {
  authId?: number;
  authName?: string;
  authStatus?: AsideMenuStatus;
  authPath?: string;
  authLevel?: AsideMenuLevel;
  authApi?: string;
  creator?: string;
  modify?: string;
  createTime?: number;
  updateTime?: number;
  dataVersion?: number;
}

export interface AuthQueryParams {
  limit: number;
  offset: number;
  authName?: string;
  authId?: number;
  authStatus?: AsideMenuStatus;
}
