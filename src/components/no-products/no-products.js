import React from 'react'
import './no-products.css'
import SadFace from '../../assets/sad.png'


const NoProducts = () => {
  return (
    <div className='no-products' >
        <div className='no-prod-img' >
            <img src={SadFace} alt="No Products" className='no-products-image' />
        </div>
        <div className='no-prod-text' >
            Sorry! No Products match your query.
        </div>
    </div>
  )
}

export default NoProducts