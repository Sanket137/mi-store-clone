import React from "react";
import "../styles/ProductReviewCard.css";

const ProductReviewCard = ({ image, name, price, review, index }) => {
  return (
    <div className="ProductReviewCard">
      <img src={image} alt={`${index} Reviews`} />
      <h5 >{review}</h5>
      <span >{name}</span>
      <b >{price}</b>
    </div>
  );
};

export default ProductReviewCard;
