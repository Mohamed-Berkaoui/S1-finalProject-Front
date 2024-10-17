import { Rating } from "@mui/material"
import Button from "./Button"


function ProductDiscription({product}) {


  return (
    <div className="product-desc">
              <div className="right">
        <img src={product.image} alt="" />
        <div className="rating">
       
       <h4>Product Rating :</h4>
          <Rating name="read-only" size="large"  value={Math.round(product.rate?.rating)} readOnly />
        </div>
      </div>
      <div className="left">
        <h2>{product.title}</h2>
        <p>
      {product.description}
        </p>
        <h4>{product.price} $</h4>
        <h5 className={product.totalQuantity-product.saleCount ? "available" : "not-available"}>
          {product.totalQuantity-product.saleCount  ? "available" : "not abailable"}
        </h5>
        {product.totalQuantity-product.saleCount?  <Button >add to cart</Button>:<button className="b-not-available"  disabled>add to cart</button>}
      </div>
    </div>
  )
}

export default ProductDiscription
