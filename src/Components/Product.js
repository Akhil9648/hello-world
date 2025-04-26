import React from 'react';

export default function Product(props) {
  const product = props.product || {};

  return (
    <div className="row">
      <div className="col-5">
        <h2>
          {product.name}
          <span className="badge text-bg-secondary">₹{product.price}</span>
        </h2>
      </div>
      <div className="col-3">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            type="button"
            className="btn btn-success"
            onClick={() => props.decrementQuantity(props.index)}
          >
            -
          </button>
          <button type="button" className="btn btn-danger">
            {product.quantity}
          </button>
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => props.incrementQuantity(props.index)}
          >
            +
          </button>
        </div>
      </div>
      <div className="col-2">
        ₹{product.quantity * product.price}
      </div>
      <div>
    <button className="col-2 btn btn-danger" onClick={()=>{props.removeItem(props.index)}}>Remove</button>
  </div>
    </div>
  );
} 