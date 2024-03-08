import Header from "./Header";

import Layout from "./Layout";
// import "slick-carousel/slick/slick.css";
// import Footer from "@/components/Footer";


export default function Logit({ children }) {
  return (
   
        <Layout>
          <Header />
          {children}
        </Layout>
  
  );
}
