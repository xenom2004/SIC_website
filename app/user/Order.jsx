export default function Order_card(order) {
  return (
    <>
      <div
        onClick={() => {
          order.setselected(order.order._id);
          order.setorder_details(order.order);
        }}
        className={`hover:bg-lightSky2 hover:text-white rounded-xl border-1 flex flex-row px-2 mx-2 items-center  content-cenetr ${
          order.state === true ? "shadow-xl" : ""
        }`}
      >
        <div className="flex flex-col grow p-2">
          <h1 className="text-xl font-bold">Order Id: {order.order._id}</h1>
          <h1 className="text-lg">
            Payment: {order.order.price.$numberDecimal}
          </h1>
        </div>
        <div className="px-4 ">{order.order.status}</div>
        <div className="px-4 flex align-center">
          {order.order.Date.substring(0, 10)}
        </div>
      </div>
    </>
  );
}
