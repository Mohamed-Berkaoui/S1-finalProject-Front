import React from "react";
import Button from "./Button";

function CartBox() {
  return (
    <div className="cart-box">
      <img src="/images.jpg" alt="" />
      <h4> product title</h4>
      <p>product price</p>
      <div>
        <Button>+</Button>
        <h5>quantity</h5>
        <Button>-</Button>
        <Button>
          <i class="fa-solid fa-trash"></i>
        </Button>
      </div>
    </div>
  );
}

export default CartBox;
