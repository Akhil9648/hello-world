import React, { useState } from 'react';

export default function Additem(props) {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.Add(itemName, itemPrice);
    setItemName('');
    setItemPrice('');
  };

  return (
    <form className="row mb-5" onSubmit={handleSubmit}>
      <div className="mb-3 col-4">
        <label htmlFor="inputname" className="form-label">
          Item Name
        </label>
        <input
          type="text"
          className="form-control"
          id="inputname"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
      </div>
      <div className="mb-3 col-4">
        <label htmlFor="inputprice" className="form-label">
          Price
        </label>
        <input
          type="number"
          className="form-control"
          id="inputprice"
          value={itemPrice}
          onChange={(e) => setItemPrice(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary btn-sm col-4">
        Add
      </button>
    </form>
  );
}