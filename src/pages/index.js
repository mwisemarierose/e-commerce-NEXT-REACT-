import React from 'react'

function index() {
  return (
    <>
    HeroBanner
    <div className='produc-heading'>
    <h2>Best Selling Products</h2>
    <p>Speakers of many variations</p>
    </div>
    <div className='products-container'>
{['produc 1','product 2'].map(
  (product) => product
)}

    </div>
    Footer
    </>
   
  )
}

export default index