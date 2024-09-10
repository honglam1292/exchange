import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enJson from "@/translation/en.json";
import zhHansJson from "@/translation/zh-Hans.json";
import zhHantJson from "@/translation/zh-Hant.json";

export const resources = {
  en: enJson,
  "zh-Hans": zhHansJson,
  "zh-Hant": zhHantJson,
} as const;

// i18n.use(initReactI18next).init({
//   fallbackLng: "en",
//   debug: false,
//   resources: resources,
// });
// export { i18n };
i18n.use(initReactI18next).init({
  fallbackLng: "en",
  debug: false,
  resources: resources,
});

export { i18n };
