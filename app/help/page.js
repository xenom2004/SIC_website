"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from "../TranslationalContext";

const HelpPage = () => {
  const { translate, setLanguage } = useTranslation();// this is the use for translation
  const scrollToContent = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [showGoUpButton, setShowGoUpButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 200) {
        setShowGoUpButton(true);
      } else {
        setShowGoUpButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleGoUpClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/4 bg-gray-200 p-4">
        <h1 className="text-2xl font-bold mb-4">{translate("temp198")}</h1>
        <h2 className="text-lg font-semibold mb-4">{translate("temp199")}</h2>
        <ul className="space-y-2">
          <li className="cursor-pointer text-blue-600 hover:text-blue-800" onClick={() => scrollToContent("create-account")}>
            {translate("temp200")}
          </li>
          <li className="cursor-pointer text-blue-600 hover:text-blue-800" onClick={() => scrollToContent("login")}>
            {translate("temp201")}
          </li>
          <li className="cursor-pointer text-blue-600 hover:text-blue-800" onClick={() => scrollToContent("complete-profile")}>
            {translate("temp202")}
          </li>
          <li className="cursor-pointer text-blue-600 hover:text-blue-800" onClick={() => scrollToContent("browse-instruments")}>
            {translate("temp203")}
          </li>
          <li className="cursor-pointer text-blue-600 hover:text-blue-800" onClick={() => scrollToContent("place-order")}>
            {translate("temp204")}
          </li>
          <li className="cursor-pointer text-blue-600 hover:text-blue-800" onClick={() => scrollToContent("payment")}>
            {translate("temp205")}
          </li>
          <li className="cursor-pointer text-blue-600 hover:text-blue-800" onClick={() => scrollToContent("send-samples")}>
            {translate("temp206")}
          </li>
        </ul>
      </div>
      <div className="w-full md:w-3/4 p-4">
        <h3 className="text-xl font-bold mb-4">{translate("temp207")}</h3>
        <section id="create-account" className="mb-8">
          <h2 className="text-xl font-semibold mb-4">{translate("temp208")}</h2>
          <p className="text-gray-800">{translate("temp209")}<br/>
            <Link href="./register" className="text-blue-600">{translate("temp210")}</Link>
          </p>
        </section>
        <section id="login" className="mb-8">
          <h2 className="text-xl font-semibold mb-4">{translate("temp211")}</h2>
          <p className="text-gray-800">{translate("temp212")}<br/>
            <Link href="./login" className="text-blue-600">{translate("temp213")}</Link>
          </p>
        </section>
        <section id="complete-profile" className="mb-8">
          <h2 className="text-xl font-semibold mb-4">{translate("temp214")}</h2>
          <p className="text-gray-800">{translate("temp215")}<br/>
            <Link href="./profile" className="text-blue-600">{translate("temp216")}</Link>
          </p>
        </section>
        <section id="browse-instruments" className="mb-8">
          <h2 className="text-xl font-semibold mb-4">{translate("temp217")}</h2>
          <p className="text-gray-800">{translate("temp218")}<br/>
            <Link href="./instruments" className="text-blue-600">{translate("temp219")}</Link>
          </p>
        </section>
        <section id="place-order" className="mb-8">
          <h2 className="text-xl font-semibold mb-4">{translate("temp220")}</h2>
          <p className="text-gray-800">{translate("temp221")}<br/>
            <Link href="./usageCharges" className="text-blue-600">{translate("temp222")}</Link>
          </p>
        </section>
        <section id="payment" className="mb-8">
          <h2 className="text-xl font-semibold mb-4">{translate("temp223")}</h2>
          <p className="text-gray-800">{translate("temp224")}<br/>
            <Link href="./user" className="text-blue-600">{translate("temp225")}</Link>
          </p>
        </section>
        <section id="send-samples">
          <h2 className="text-xl font-semibold mb-4">{translate("temp226")}</h2>
          <p className="text-gray-800">{translate("temp227")}</p>
        </section>
      </div>
      {showGoUpButton && (
        <button className="fixed bottom-100 right-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full shadow" onClick={handleGoUpClick}>
          {translate("temp228")}
        </button>
      )}
    </div>
  );
};

export default HelpPage;
