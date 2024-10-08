import React from "react";

function ProductComments() {
  const comments = [
    { user: "salah", comment: "comment lksdlfksdnlkn sdkjbnsdlkn lnsdlknl" },
    { user: "med", comment: "comment lksdlfksdnlkn sdkjbnsdlkn lnsdlknl" },
  ];
  return (
    <div className="comments-container">
        <h1> Custemurs  Reviews</h1>
      {comments.map((comment) => {
        return (
          <div className="comment">
            <h4>{comment.user} :</h4>
            <p>{comment.comment} </p>
          </div>
        );
      })}
    </div>
  );
}

export default ProductComments;
