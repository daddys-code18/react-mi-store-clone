import React from "react";
import ProductReviewsCard from "../components/ProductReviewCard.js";
import "../styles/ProductReviews.css"
const ProductReviews = ({ ProductReviews }) => {
  return (
    <div className="ProductReviews">
      {ProductReviews.map((item, index) => (
        <ProductReviewsCard
          price={item.price}
          name={item.name}
          image={item.image}
          review={item.review}
          index={item.index}
          key={item.image}
        />
      ))}
    </div>
  );
};

export default ProductReviews;
