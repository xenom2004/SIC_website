"use client";
import { useTranslation } from "../TranslationalContext";

const HomePage = () => {
  const { translate, setLanguage } = useTranslation();

  return (
    <div>
      <h1>{translate("welcome")}</h1>
      <p>{translate("description")}</p>
      <button onClick={() => setLanguage("en")}>English</button>
      <button onClick={() => setLanguage("hi")}>हिंदी</button>
    </div>
  );
};

export default HomePage;
