import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import ProductList from './Components/Productlist';
import Footer from './Components/Footer';
import Additem from './Components/Additem.js';

function App() {
  const initialProducts = [
    {
      price: 99999,
      name: "iPhone 10s Max",
      quantity: 0,
    },
    {
      price: 9999,
      name: "Redmi 10s Max",
      quantity: 0,
    }
  ];

  const [productList, setProductList] = useState(initialProducts);
  const [totalAmount, settotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    const newProductList = [...productList];
    newProductList[index].quantity++;
    let newtotalAmount = totalAmount;
    newtotalAmount += newProductList[index].price;
    settotalAmount(newtotalAmount);
    setProductList(newProductList);
  };

  const decrementQuantity = (index) => {
    const newProductList = [...productList];
    let newtotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newtotalAmount -= newProductList[index].price;
    }
    settotalAmount(newtotalAmount);
    setProductList(newProductList);
  };

  const resetQuantity = () => {
    const newProductList = productList.map((product) => ({ ...product, quantity: 0 }));
    setProductList(newProductList);
    settotalAmount(0);
  };

  const removeItem = (index) => {
    const newProductList = [...productList];
    let newtotalAmount = totalAmount;
    newtotalAmount -= newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1);
    setProductList(newProductList);
    settotalAmount(newtotalAmount);
  };

  const Add = (name, price) => {
    if (!name || !price || isNaN(price) || parseFloat(price) <= 0) {
      alert("Please enter a valid item name and price.");
      return;
    }
    const isDuplicate = productList.some((product) => product.name === name);
    if (isDuplicate) {
      alert("Product with this name already exists.");
      return;
    }
    const newProductList = [...productList];
    newProductList.push({
      price: parseFloat(price),
      name: name,
      quantity: 0,
    });
    setProductList(newProductList);
  };

  return (
    <>
      <Navbar />
      <main className='container mt-5'>
        <Additem Add={Add} />
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </>
  );
}

export default App;