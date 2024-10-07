import '../styles/productbox.css'
import Button from './Button'


function ProductBox() {
  return (
    <div className='product-box'>
<div className="right">
    <img src="./images.jpg" alt="" />
    <Button> show more</Button>
</div>
<div className="left">
    <h4>product title</h4>
    <p>product category</p>
    <p>product price DT</p>
    <h5>rating: (3/5)</h5>
</div>

    </div>
  )
}

export default ProductBox