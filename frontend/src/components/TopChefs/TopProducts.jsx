import React from 'react'
import './TopProducts.css'
import {useNavigate} from 'react-router-dom'

const TopProducts = () => {
  const navigate=useNavigate()

  return (
    <div className="our-product">
  {/* Category */}
  <h2 className="our-products-head">Our Top Latest Collections</h2>
  <p className="our-products-para">
    Get the best priced products from our top collections. Browse through our latest products and get the best deals.
  </p>

  <div className="our-products-boxes">
    <div className="box box1" onClick={()=>navigate('/products/men')}>
      <p className='product-name' >Men </p>

    </div>

    <div className="box box2" onClick={() => navigate('/products/women')}>
      <p className='product-name'  >Women</p>

    </div>

    <div className="box box3" onClick={() => navigate('/products/children')}>
      <p className='product-name' >Children</p>

    </div>

    <div className="box box4" onClick={() => navigate('/lanyard')}>
      <p className='product-name'>Latest Lanyard</p>
    
    </div>

  </div>
</div>

  )
}

export default TopProducts