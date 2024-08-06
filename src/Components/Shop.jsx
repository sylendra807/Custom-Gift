import React from 'react'
import Carosel from './Carosel'
import '../Asserts/css/shop.css'
const Shop = () => {
  return (
    <div className='shop'>
        <p>kick start your shopping journey</p>
        <Carosel  name="mug" />
        <Carosel name="toy"/>
    </div>
  )
}

export default Shop