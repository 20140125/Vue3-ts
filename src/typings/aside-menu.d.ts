import { AsideMenuStatus, AsideMenuLevel } from "@/constant/aside-menu";

export interface Menu {
  asideMenuId?: number;
  asideMenuName?: string;
  asideMenuAuthName?: string;
  asideMenuLevel?: AsideMenuLevel;
  asideMenuPath?: string;
  asideMenuApiUrl?: string;
  asideMenuStatus?: AsideMenuStatus;
  queryParams?: AnyObject;
}

export interface MenuItem extends Menu {
  children?: Menu[];
}

export interface LabelValue {
  label: string;
  value: number;
}
