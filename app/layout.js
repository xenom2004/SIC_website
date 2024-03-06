import Header from "./components/Header";
// import "./css/globals.css";
import Layout from "./components/Layout";
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
      <body className="font-bodyFont w-full bg-main-bg text-darkText">
        <Layout>
          <Header />
          {children}
        </Layout>
      </body>
    </html>
  );
}
