import BET from "../order/page";
const forms_instrument = {
  25: <BET />,
};
import React from "react";

const All = () => {
  return <div>{forms_instrument[25]}</div>;
};

export default All;
