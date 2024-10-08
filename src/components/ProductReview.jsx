import { Fab, Rating } from "@mui/material";
import { useState } from "react";
import Button from "./Button";

function ProductReview() {
  const [open, setOpen] = useState(false);
  console.log(open);

  return (
    <div className="product-review">
      <div className="open-review">
        <Fab
          className="button"
          onClick={() => setOpen(!open)}
          color="primary"
          aria-label="add"
        >
         {open?"-":"+"}
        </Fab>
      </div>
 
        <form  className={open?"add-review-open add-review":"add-review-close add-review"}>
          <div className="input">
            <h4>Add your comment</h4>
            <textarea placeholder="your comment here ..."></textarea>
          </div>
          <div>
            <h5>rate this product</h5>
            <Rating name="size-large" defaultValue={0} size="large" />
          </div>
          <Button>add comment</Button>
        </form>

    </div>
  );
}

export default ProductReview;
