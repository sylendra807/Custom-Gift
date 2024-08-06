// Add.js
import React, { useState } from 'react';
import '../Asserts/css/ad.css';
import axios from 'axios';

const Add = () => {
    const [obj, setObj] = useState({
        name: "",
        image: "",
        price: "",
        description: "",
        category: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setObj({
            ...obj,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(obj);
            const response = await axios.post("http://localhost:8080/api/products", obj, {
                headers: { 'Content-Type': 'application/json' },
            });
            console.log("Product added", response.data);
        } catch (error) {
            console.error("There was an error adding the product!", error);
        }
    };

    return (
        <div className='add'>
            <form onSubmit={handleSubmit}>
                <div className="page">
                    <label>Product name:</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={obj.name} 
                        onChange={handleChange} 
                        className='inp'
                    />
                    <label>Product Image URL:</label>
                    <input 
                        type="text" 
                        name="image" 
                        value={obj.image} 
                        onChange={handleChange} 
                        className='inp'
                    />
                    <label>Product Price:</label>
                    <input 
                        type="text" 
                        name="price" 
                        value={obj.price} 
                        onChange={handleChange} 
                        className='inp'
                    />
                    <label>Product Category:</label>
                    <input 
                        type="text" 
                        name="category" 
                        value={obj.category} 
                        onChange={handleChange} 
                        className='inp'
                    />
                    <label>Product Description:</label>
                    <textarea 
                        name="description" 
                        value={obj.description} 
                        onChange={handleChange} 
                    />
                    <button type="submit" style={{ marginLeft: "170px" }}>Add Product</button>
                </div>
            </form>
        </div>
    );
};

export default Add;
