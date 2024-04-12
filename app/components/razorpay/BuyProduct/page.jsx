"use client";
import React, { Suspense } from "react";
import Buy from "../Buy";
import { useRouter } from "next/navigation";
import Loading from "../../Loading";

const BuyProduct = () => {
  const router = useRouter();

  const makePayment = async ({ productId = null }) => {
    const key = process.env.RAZORPAY_API_KEY;
    console.log(key);
    // Make API call to the serverless API
    try {
      const data = await fetch("http://localhost:3000/api/razorpay");
      console.log(data, "data here");
      const { order } = await data.json();
      console.log(order.id, "id");
      const options = {
        key: key,
        name: "debasish",
        currency: order.currency,
        amount: order.amount,
        order_id: order.id,
        description: "Understanding RazorPay Integration",
        handler: async function (response) {
          if (response.length == 0) return <Loading />;
          console.log(response);

          const data = await fetch("http://localhost:3000/api/paymentVerify", {
            method: "POST",
            headers: {
              Authorization: "YOUR_AUTH_HERE",
            },
            body: JSON.stringify({
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
            }),
          });

          const res = await data.json();

          console.log("response verify==", res);

          if (res?.message == "success") {
            console.log("redirected.......");
            router.push(
              "/paymentSuccess?paymentid=" + response.razorpay_payment_id
            );
          }

          // Validate payment at server - using webhooks is a better idea.
          // alert(response.razorpay_payment_id);
          // alert(response.razorpay_order_id);
          // alert(response.razorpay_signature);
        },
        prefill: {
          name: "debasish",
          email: "rishubapudi@gmail.com",
          contact: "000000000",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();

      paymentObject.on("payment.failed", function (response) {
        alert("Payment failed. Please try again. Contact support for help");
      });
    } catch (er) {
      console.log(er, "ttttt");
    }
  };

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Buy makePayment={makePayment} />
      </Suspense>
    </>
  );
};

export default BuyProduct;
