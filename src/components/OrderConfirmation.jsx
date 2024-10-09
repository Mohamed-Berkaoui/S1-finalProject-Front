import { MenuItem, Select } from "@mui/material";
import React, { useRef, useState } from "react";

function OrderConfirmation() {
  const [orderInfos, setOrderInfos] = useState({
    address: "personal address",
    paymentMethod: "on delivary",
  });
  function handleInfosChange(e) {
    setOrderInfos({ ...orderInfos, address: e.target.value });
  }
  function handlePaymentChange(e) {
    setOrderInfos({ ...orderInfos, paymentMethod: e.target.value });
  }
  return (
    <div className="order-confirm">
      <h2> complete your order</h2>
      <form>
        <h4>select adress</h4>
        <div>
          <div>
            <label htmlFor="">your account adress:</label>
            <input
              type="radio"
              name="userAdress"
              value={"personal address"}
              onChange={handleInfosChange}
            />
          </div>
          <div>
            <label htmlFor="">other adress</label>
            <input
              type="radio"
              name="userAdress"
              value={"other address"}
              onChange={handleInfosChange}
            />
          </div>

          <div
            className="hidden-input"
            style={{
              display:
                orderInfos.address === "personal address" ? "none" : "block",
            }}
          >
            <input type="text" />
          </div>
        </div>

        <div>
          <h2>payment method :</h2>
          <Select
            value={orderInfos.paymentMethod}
            onChange={handlePaymentChange}
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value={"on delivery"}>on delivary</MenuItem>
            <MenuItem value={"paypal"}>paypal</MenuItem>
          </Select>
        </div>
        <input type="submit"/>
      </form>
    </div>
  );
}

export default OrderConfirmation;
