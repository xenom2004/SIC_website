
import Header from "./components/Header";
import "./globals.css";
import "./globalicon.css"
import {NextUIProvider} from "@nextui-org/react";
import Layout from "./components/Layout";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Script from "next/script";

config.autoAddCss = false;
// import "slick-carousel/slick/slick.css";
// import Footer from "@/components/Footer";
import Footer from "./components/Footer";
export const metadata = {
  title: {
    template: "SIC",
    default: "SIC-website",
  },
};

export default function RootLayout({ children }) {
  return (
    <>
    <html lang="en">
     
      <head><script src="https://kit.fontawesome.com/4abac0a3cd.js" crossOrigin="anonymous"></script></head>
      <body className="font-bodyFont w-full bg-main-bg text-darkText">
        <Layout>
          <div className="flex flex-col gap-y-4">
            <div className="mb-32 md:mb-24 lg:mb-24 xl:mb-24">
          <Header />
          </div>
          <div className="" style={{minHeight: '825px'}}>
            {children}
          </div>
          <div className="mt-0">
          <Footer/>
          </div>
          </div>
        </Layout>
      </body>
      
    </html>

    <Script src="https://checkout.razorpay.com/v1/checkout.js"/>
    </>
  );
}
