import React from "react";
import "../styles/StarProducts.css";

const StarProducts = ({ starProducts }) => {
//   console.log(starProducts[0].url);
  return (
    <div className="star-product-section">
      <div>
        <a href={starProducts[0].url}>
          <img src={starProducts[0].image} alt="" />
        </a>
      </div>
      <div>
        <div className="d-flex">
          <div>
            <a href={starProducts[1].url}>
              <img src={starProducts[1].image} alt="" />
            </a>
          </div>
          <div>
            <a href={starProducts[2].url}>
              <img src={starProducts[2].image} alt="" />
            </a>
          </div>
        </div>
        <div>
          <a href={starProducts[3].url}>
            <img src={starProducts[3].image} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default StarProducts;
