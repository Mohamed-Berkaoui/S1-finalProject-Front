import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import CartBox from "../components/CartBox";
import "../styles/cartpage.css";

function CartPage() {
    const navigate=useNavigate()
  return (
    <div className="cart-container">
      <div className="cart-boxes">
        {[0, 0, 0].map((product) => (
          <CartBox />
        ))}
      </div>
      <div className="back">
      <h4 onClick={()=>navigate(-1)}>
          <i class="fa-solid fa-arrow-left"></i>
        </h4>
        <h5>total price</h5>
       <Link to={"/order"} > <Button> order now</Button></Link>
      </div>
    </div>
  );
}

export default CartPage;
