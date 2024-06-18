export enum AsideMenuLevel {
  ASIDE_MENU_LEVEL_P1 = 1, // 一级权限
  ASIDE_MENU_LEVEL_P2 = 2, // 二级权限
  ASIDE_MENU_LEVEL_P3 = 3, // 三级权限
}

export const asidesMenuLevelMap: { [key: number]: string } = {
  [AsideMenuLevel.ASIDE_MENU_LEVEL_P1]: "一级权限",
  [AsideMenuLevel.ASIDE_MENU_LEVEL_P2]: "二级权限",
  [AsideMenuLevel.ASIDE_MENU_LEVEL_P3]: "三级权限",
};

export enum AsideMenuStatus {
  ASIDE_MENU_STATUS_DEFAULT = 0, // 缺省值（默认）
  ASIDE_MENU_STATUS_ONLINE = 1, // 启用
  ASIDE_MENU_STATUS_OFFLINE = 2, // 禁用
}

export const asideMenuStatusMap: { [key: number]: string } = {
  [AsideMenuStatus.ASIDE_MENU_STATUS_DEFAULT]: "默认",
  [AsideMenuStatus.ASIDE_MENU_STATUS_ONLINE]: "启用",
  [AsideMenuStatus.ASIDE_MENU_STATUS_OFFLINE]: "禁用",
};
