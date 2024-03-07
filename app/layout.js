import Header from "./components/Header";
import "./globals.css";
import "./globalicon.css"
import Layout from "./components/Layout";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
// import "slick-carousel/slick/slick.css";
// import Footer from "@/components/Footer";

export const metadata = {
  title: {
    template: "shopping_mart",
    default: "Shopping Mart - A place for all!",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head><script src="https://kit.fontawesome.com/4abac0a3cd.js" crossorigin="anonymous"></script></head>
      <body className="font-bodyFont w-full bg-main-bg text-darkText">
        <Layout>
          {/* <Header /> */}
          {children}
        </Layout>
      </body>
    </html>
  );
}
