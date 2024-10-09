import { Rating, Typography } from "@mui/material"
import Button from "./Button"


function ProductDiscription() {
    const inStock=true
  return (
    <div className="product-desc">
              <div className="right">
        <img src="/images.jpg" alt="" />
        <div className="rating">
       
       <h4>Product Rating :</h4>
          <Rating name="read-only" size="large"  value={2} readOnly />
        </div>
      </div>
      <div className="left">
        <h2>product titile</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad eveniet
          sequi voluptatum molestiae quibusdam dignissimos optio cum ipsam
          necessitatibus praesentium id facilis vitae error at veritatis,
          architecto a odio porro?
        </p>
        <h4>price $</h4>
        <h5 className={inStock ? "available" : "not-available"}>
          {inStock ? "available" : "not abailable"}
        </h5>
        {inStock?  <Button >add to cart</Button>:<button className="b-not-available"  disabled>add to cart</button>}
      </div>
    </div>
  )
}

export default ProductDiscription
