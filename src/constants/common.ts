export const SysLangLocal = "syslang";
export const i18nLngLocal = "i18nLng";

export const LOCAL = {
  SYSLANG: "SYSLANG",
  i18nLng: "i18nLng",
  i18nextLng: "i18nextLng",
  auth: "auth"
};

type SysLangStringType = {
  [x: string]: number;
};

export const sysLang: SysLangStringType = {
  en: 1,
  "zh-Hant": 3,
  "zh-Hans": 2,
};
