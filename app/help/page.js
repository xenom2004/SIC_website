"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";

const HelpPage = () => {
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
        <h1 className="text-2xl font-bold mb-4">Help Page</h1>
        <h2 className="text-lg font-semibold mb-4">Index</h2>
        <ul className="space-y-2">
          <li
            className="cursor-pointer text-blue-600 hover:text-blue-800"
            onClick={() => scrollToContent("create-account")}
          >
           Create account
          </li>
          <li
            className="cursor-pointer text-blue-600 hover:text-blue-800"
            onClick={() => scrollToContent("login")}
          >
            Login
          </li>
          <li
            className="cursor-pointer text-blue-600 hover:text-blue-800"
            onClick={() => scrollToContent("complete-profile")}
          >
            Complete Profile
          </li>
          <li
            className="cursor-pointer text-blue-600 hover:text-blue-800"
            onClick={() => scrollToContent("browse-instruments")}
          >
            Browse instruments
          </li>
          <li
            className="cursor-pointer text-blue-600 hover:text-blue-800"
            onClick={() => scrollToContent("place-order")}
          >
            Place Order
          </li>
          <li
            className="cursor-pointer text-blue-600 hover:text-blue-800"
            onClick={() => scrollToContent("payment")}
          >
            Payment
          </li>
          <li
            className="cursor-pointer text-blue-600 hover:text-blue-800"
            onClick={() => scrollToContent("send-samples")}
          >
            Send samples
          </li>
        </ul>
      </div>
      <div className="w-full md:w-3/4 p-4">
        <h3 className="text-xl font-bold mb-4">
          Follow the guidelines to ease your request making process</h3>
        <section id="create-account" className="mb-8">
          <h2 className="text-xl font-semibold mb-4">1.Create account</h2>
          <p className="text-gray-800">
            To place orders for use of instruments, first create an account. You will need only a username and password to create your account. Alternatively, you can use your Google Account to register and login by going directly to login page. 
            <br/>
            <Link href="./register" className="text-blue-600">
            Click Here
            </Link>
          </p>
        </section>
        <section id="login" className="mb-8">
          <h2 className="text-xl font-semibold mb-4">2.Login</h2>
          <p className="text-gray-800">
              After creating your account, you can log in by going to this link. Enter your username and password to login. Alternatively, use your Google Account to login.
              <br/>
            <Link href="./login" className="text-blue-600">
            Click Here
            </Link>
          </p>
        </section>
        <section id="complete-profile" className="mb-8">
          <h2 className="text-xl font-semibold mb-4">3.Complete Profile</h2>
          <p className="text-gray-800">
              In order to place an order, you must complete your profile. It includes details like name, email, phone number, cover letter, your ID-card, etc. It is mandatory to fill your profile to place an order. 
              <br/>
            <Link href="./profile" className="text-blue-600">
            Click Here
            </Link>
          </p>
        </section>
        <section id="browse-instruments" className="mb-8">
          <h2 className="text-xl font-semibold mb-4">4.Browse instruments</h2>
          <p className="text-gray-800">
            To browse instruments go to our instruments page to get detailed description of the variety of instruments present at our institute and also check their availability. You can also view the list on our home page.
            <br/>
            <Link href="./instruments" className="text-blue-600">
            Click Here
            </Link>
          </p>
        </section>
        <section id="place-order" className="mb-8">
          <h2 className="text-xl font-semibold mb-4">5.Place Order</h2>
          <p className="text-gray-800">
            Before placing your order, first visit "Usage Charges" page to calculate the total cost of instruments by selecting your desired instruments. After that click on "proceed further" to get the forms for the instruments which you can fill and submit to SIC.
            <br/>
            <Link href="./usageCharges" className="text-blue-600">
            Click Here
            </Link> 
          </p>
        </section>
        <section id="payment" className="mb-8">
          <h2 className="text-xl font-semibold mb-4">6.Payment</h2>
          <p className="text-gray-800">
            After placing your order, you can view your order in your "Orders" page. After your order details and personal information has been approved by SIC, you can make payment by going to "Proceed to Payment" in your order details. You can pay by any online mode of payment feasible namely, netbanking, credit/debit card, UPI, etc.
            <br/>
            <Link href="./user" className="text-blue-600">
            Click Here
            </Link>
          </p>
        </section>
        <section id="send-samples">
          <h2 className="text-xl font-semibold mb-4">7.Send samples</h2>
          <p className="text-gray-800">
            After payment is complete and SIC has confirmed the transaction, your order status will become "payment complete". Now you can send your samples to SIC via mail/post.
          </p>
        </section>
      </div>
      {showGoUpButton && (
        <button
          className="fixed bottom-100 right-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full shadow"
          onClick={handleGoUpClick}
        >
          Go Up
        </button>
      )}
    </div>
  );
};

export default HelpPage;
