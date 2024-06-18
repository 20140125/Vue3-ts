import { AuthBo, AuthQueryParams } from "@/typings/auth.d";
import { AsideMenuLevel, AsideMenuStatus } from "@/constant/aside-menu";

export const ListAuthParams: AuthQueryParams = {
  limit: 20,
  offset: 0,
  authId: undefined,
  authName: undefined,
  authStatus: AsideMenuStatus.ASIDE_MENU_STATUS_DEFAULT,
};

export const AddAuthParams: AuthBo = {
  authStatus: AsideMenuStatus.ASIDE_MENU_STATUS_DEFAULT,
  authName: "",
  authApi: "",
  authPath: "",
  authLevel: AsideMenuLevel.ASIDE_MENU_LEVEL_P1,
  dataVersion: 0,
};

export const UpdateAuthParams: AuthBo = {
  ...AddAuthParams,
  authId: undefined,
};

export const DeleteAuthParams: AuthBo = {
  authId: undefined,
};

export const QueryAuthParams: AuthBo = {
  authId: undefined,
};
