"use client"
import React, { createContext, useContext, useState } from "react";

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const translations = {
    en: {
      welcome: "Welcome",
      description: "This is a sample website.",
      instruments: "Instrument Live Status"
    },
    hi: {
      welcome: "स्वागत है",
      description: "यह एक नमूना वेबसाइट है।",
      instruments: "Instrument hindi Live Status"
    },
  };

  const translate = (key) => translations[language][key] || key;

  return (
    <TranslationContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);
