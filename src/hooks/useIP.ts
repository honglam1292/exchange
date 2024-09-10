import { LOCAL, sysLang } from "@/constants/common";
import { useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";

export const useIP = () => {
  const { i18n } = useTranslation();
  const keyLang = localStorage.getItem(LOCAL.i18nLng) || "en";

  const handleLanguage = useCallback(async () => {
    const valueSyslang = String(sysLang[keyLang]);

    localStorage.setItem(LOCAL.SYSLANG, valueSyslang);

    if (keyLang) {
      i18n?.changeLanguage(keyLang || "en");
      localStorage.setItem(LOCAL.i18nLng, keyLang);
      return;
    }
    localStorage.setItem(LOCAL.i18nLng, "en");
    i18n?.changeLanguage("en");
  }, [keyLang, i18n]);

  useEffect(() => {
    handleLanguage();
  }, [handleLanguage]);
};
