import axios from 'axios';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Confirmation = () => {
  
  const loc=useLocation();
  const order = loc.state;
  const nav=useNavigate();
  const order1={
    
     name:order.cust.name,
    email:order.cust.email,
    product:order.name,
    price:order.price,
    date:order.date,
    address:order.address
  }
  const handl= async ()=>{
    await axios.post('http://localhost:8080/order',order1,
      {
        headers: { 'Content-Type': 'application/json' },
      });
    nav('/shop')
  }
  return (
    <div className='confirmation'>
      <h1>Order Confirmation</h1>
      <div>
        <h2>Order Details:</h2>
        <p><strong>Customer:</strong> {order.cust.name}</p>
        <p><strong>Email:</strong> {order.cust.email}</p>
        <p><strong>Item Name:</strong> {order.name}</p>
        <p><strong>Item Price:</strong> {order.price}</p>
        <p><strong>Delivery Date:</strong> {order.date}</p>
        <p><strong>Address:</strong> {order.address}</p>
        <button onClick={handl}>continue</button>
      </div>
    </div>
  );
};

export default Confirmation;
