import "../styles/productpage.css";
import ProductDiscription from "../components/ProductDiscription";
import ProductComments from "../components/ProductComments";
import ProductReview from "../components/ProductReview";
import { useEffect } from "react";
function ProductPage() {
  useEffect(()=>window.scrollTo(0, 0))
  return (
    <div className="product-page">
        <ProductDiscription/>
        <ProductComments/>
        <ProductReview/>
    </div>
  );
}

export default ProductPage;
