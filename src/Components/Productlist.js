import React from "react";
import Product from "./Product.js";

export default function ProductList(props) {
  const productList = props.productList || [];

  return (
    props.productList.length>0?
    <div>
      {productList.map((product, i) => (
        <Product
          key={i}
          product={product}
          incrementQuantity={props.incrementQuantity}
          decrementQuantity={props.decrementQuantity}
          removeItem={props.removeItem}
          index={i}
        />
      ))}
    </div>
    : <h1>No Products Exist in the cart</h1>
  );
}
