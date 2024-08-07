import React, { useState } from 'react';
import '../Asserts/css/Address.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Address = () => {
  const navigate = useNavigate();
  const [address, setAddress] = useState("");
  const location = useLocation();
  const orderDetails = location.state;
  const user = useSelector((state) => state.user);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setAddress(prev => prev + " " + value);
  };

  const handleSubmit = () => {
    const obj = {
      ...orderDetails,
      cust: user,
      address,
    };
    console.log(obj);
    navigate('/con',{state:obj});
  };

  return (
    <div className='bg1'>
      <div className='Log1'>
        <h1>Address</h1>
        <label>Door No & Street Name</label>
        <input type='text' className="inp1" onChange={handleInputChange} />
        <label>City</label>
        <input type='text' className="inp1" onChange={handleInputChange} />
        <label>State</label>
        <input type="text" className="inp1" onChange={handleInputChange} />
        <button onClick={handleSubmit}>Next</button>
      </div>
    </div>
  );
};

export default Address;
