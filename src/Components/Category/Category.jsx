import React from "react";
import "./Category.css";

const Category = (props) => {
  return (
    <div className="categories">
      <img src={props.img} />
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">{props.new_price}</div>
        <div className="item-price-old">{props.old_price}</div>
      </div>
    </div>
  );
};

export default Category;
