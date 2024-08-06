import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../Asserts/css/Landing.css';

const Landing = () => {
    const location = useLocation();
    const item = location.state || {};  // Fallback to an empty object if location.state is undefined
    const nav = useNavigate();
    const [dd, setDd] = useState({
        date: "",
        name: item.name,
        price: item.price
    });

    const handleDateChange = (e) => {
        setDd({
            ...dd,
            date: e.target.value
        });
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-6 one" id='one'>
                    <img className="ind" src={item.url} alt="" />
                </div>
                <div className="col-6 two" id='two'>
                    <div className="input-container">
                        <h1 style={{ marginTop: "10px", marginLeft: "250px", color: "red" }}>{item.name}</h1>
                        <div className="price-container">
                            <h2 className="price-label">Price</h2>
                            <div className='hii'>
                                <h2 className="price-amount">{item.price}</h2>
                                <p>inclusive of all taxes</p>
                            </div>
                        </div>
                        <div>
                            <p>Enter your pincode</p>
                            <input type="text" className='pin' placeholder='pincode' />
                        </div>
                        <div>
                            <p>Delivery date</p>
                            <input type="date" className='pin' style={{ width: "200px" }} onChange={handleDateChange} />
                        </div>
                        <div>
                            <p>Upload the image to be printed on the gift</p>
                            <input type="file" className='sin' />
                        </div>
                    </div>
                    <div className="desc-container">
                        <p>{item.description}</p>
                    </div>
                    <button className="order" type='submit' onClick={() => { nav('/a', { state: dd }) }}>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Landing;
