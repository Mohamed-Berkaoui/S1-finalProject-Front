import { Link } from 'react-router-dom'
import '../styles/productbox.css'
import Button from './Button'


function ProductBox({prod}) {
  return (
    <div className='product-box'>
<div className="right">
    <img src="./images.jpg" alt="" />
  <Link to={"/products/1"}>  <Button> show more</Button></Link>
</div>
<div className="left">
    <h4>product title {prod}</h4>
    <p>product category</p>
    <p>product price DT</p>
    <h5>rating: (3/5)</h5>
</div>

    </div>
  )
}

export default ProductBox