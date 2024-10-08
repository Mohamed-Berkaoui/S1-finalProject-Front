import "../styles/productpage.css";
import ProductDiscription from "../components/ProductDiscription";
import ProductComments from "../components/ProductComments";
import ProductReview from "../components/ProductReview";
function ProductPage() {

  return (
    <div className="product-page">
        <ProductDiscription/>
        <ProductComments/>
        <ProductReview/>
    </div>
  );
}

export default ProductPage;
