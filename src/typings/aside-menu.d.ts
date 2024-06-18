import { AsideMenuStatus, AsideMenuLevel } from "@/constant/aside-menu";

export interface Menu {
  asideMenuId?: number;
  asideMenuName?: string;
  asideMenuLevel?: AsideMenuLevel;
  asideMenuPath?: string;
  asideMenuApiUrl?: string;
  asideMenuStatus?: AsideMenuStatus;
  queryParams?: AnyObject;
}

export interface MenuItem extends Menu {
  children?: Menu[];
}
