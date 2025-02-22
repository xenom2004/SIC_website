"use client";
import { useTranslation } from "../TranslationalContext";// this is the one to import
 
import { useState } from "react";


export default function Page() {
  const {translate, setLanguage}  = useTranslation();
  return (
    <div className="bg-gray-100 text-gray-800 font-body">
      <div className="container mx-auto py-6 px-4 md:px-8">
        <h1 className="text-3xl font-bold text-center text-blue-700">
        {translate("temp58")} 
        </h1>
      </div>

      <main className="container mx-auto my-12 px-4 md:px-8">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
          {translate("temp59")} 
          </h2>
          <p className="text-lg">
          {translate("temp60")}
            
          </p>
        </section>
        <section className="mb-12 flex flex-col md:flex-row items-center">
          <section className="mb-12 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 pr-8">
              <h2 className="text-2xl font-bold text-blue-700 mb-4">
              {translate("temp61")}
                
              </h2>
              <p className="text-lg mb-0">
              {translate("temp62")}
                
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://cdn-icons-png.freepik.com/512/1628/1628615.png"
                alt="Mission Statement"
                className="rounded-lg w-60"
              />
            </div>
          </section>

          <section className="mb-12 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 pr-8">
              <h2 className="text-2xl font-bold text-blue-700 mb-4">
              {translate("temp63")}
                
              </h2>
              <p className="text-lg mb-0">
              {translate("temp64")}
               
              </p>
            </div>
            <div className="md:w-1/2 md:pl-8 flex justify-center">
              <img
                src="https://cdn-icons-png.freepik.com/512/5419/5419089.png"
                alt="Vision Statement"
                className="rounded-lg w-60 md:w-auto"
              />
            </div>
          </section>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
          {translate("temp65")}
           
          </h2>
          <ul className="list-disc pl-6 text-lg">
            <li>
            {translate("temp66")}
              
            </li>
            <li>
            {translate("temp67")}
            
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
          {translate("temp68")}
            
          </h2>
          <ul className="list-disc pl-6 text-lg">
            <li>
            {translate("temp69")}
              
            </li>
            <li>{translate("temp70")}</li>
            <li>{translate("temp71")}</li>
            <li>{translate("temp72")}</li>
            <li>{translate("temp73")}</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
          {translate("temp74")} 
          </h2>
          <ul className="list-disc pl-6 text-lg">
            <li>
            {translate("temp75")}
            </li>
            <li>
            {translate("temp76")}
            </li>
            <li>
            {translate("temp77")}
            </li>
            <li>
            {translate("temp78")}
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
          {translate("temp79")}
          </h2>
          <ul className="list-disc pl-6 text-lg">
            <li>
            {translate("temp80")} 
            </li>
            <li>
            {translate("temp81")} 
            </li>
            <li>
            {translate("temp82")}
            </li>
            <li>
            {translate("temp83")}
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
