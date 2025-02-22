"use client"
import { useTranslation } from "../../../../TranslationalContext";
import React from "react";

const Page = () => {
  const { translate, setLanguage } = useTranslation();// this is the use for translation
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl text-lightSky font-bold  mb-8">
      {translate("temp93")}
        
      </h2>
      <div className="grid grid-cols-2 gap-8">
        {/* First Column */}
        <div>
          {/* Academic Institutions */}
          <div className="flex flex-col space-y-4 bg-gray-100 p-4">
            <h3 className="text-xl font-semibold text-gray-700">
            {translate("temp94")}
              
            </h3>
            <ul className="list-disc pl-4">
           
              <li>{translate("temp95")}</li>
<li>{translate("temp96")}</li>
<li>{translate("temp97")}</li>
<li>{translate("temp98")}</li>
<li>{translate("temp99")}</li>
<li>{translate("temp100")}</li>
<li>{translate("temp101")}</li>
<li>{translate("temp102")}</li>
<li>{translate("temp103")}</li>
<li>{translate("temp104")}</li>
<li>{translate("temp105")}</li>
<li>{translate("temp106")}</li>
<li>{translate("temp107")}</li>
<li>{translate("temp108")}</li>
<li>{translate("temp109")}</li>
<li>{translate("temp110")}</li>
<li>{translate("temp111")}</li>
<li>{translate("temp112")}</li>
<li>{translate("temp113")}</li>
<li>{translate("temp114")}</li>
<li>{translate("temp115")}</li>
<li>{translate("temp116")}</li>
<li>{translate("temp117")}</li>
<li>{translate("temp118")}</li>
<li>{translate("temp119")}</li>


            </ul>
          </div>
        </div>

        {/* Second Column */}
        <div className="grid grid-rows-2 gap-8">
          {/* Industries */}
          <div className="flex flex-col space-y-4 bg-gray-100 p-4">
            <h3 className="text-xl font-semibold text-gray-700">{translate("temp121")}</h3>
            <ul className="list-disc pl-4">
              
              <li>{translate("temp122")}</li>
<li>{translate("temp123")}</li>
<li>{translate("temp124")}</li>
<li>{translate("temp125")}</li>
<li>{translate("temp126")}</li>
<li>{translate("temp127")}</li>
<li>{translate("temp128")}</li>
<li>{translate("temp129")}</li>

            </ul>
          </div>

          {/* International */}
          <div className="flex flex-col space-y-4 bg-gray-100 p-4">
            <h3 className="text-xl font-semibold text-gray-700">
            {translate("temp130")}
              
            </h3>
            <ul className="list-disc pl-4">
              
<li>{translate("temp131")}</li>
<li>{translate("temp132")}</li>
<li>{translate("temp133")}</li>

            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
