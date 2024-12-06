import React from 'react'
import './TopChefs.css'
import {useNavigate} from 'react-router-dom'

const TopChefs = () => {
  const navigate=useNavigate()

  return (
    <div className="our-chefs">
  {/* Category */}
  <h2 className="our-chefs-head">Our Top Latest Collections</h2>
  <p className="our-chefs-para">
    Get the meal served on your plate by the best chefs across the contry.
  </p>

  <div className="our-chefs-boxes">
    <div className="box box1" onClick={()=>navigate('/products/men')}>
      <p className='chef-name' >Men </p>

    </div>

    <div className="box box2" onClick={() => navigate('/products/women')}>
      <p className='chef-name'  >Women</p>

    </div>

    <div className="box box3" onClick={() => navigate('/products/children')}>
      <p className='chef-name' style={{color:'black'}}>Children</p>

    </div>

    <div className="box box4" onClick={() => navigate('/lanyard')}>
      <p className='chef-name' style={{color:'black'}} >Latest Lanyard</p>
    
    </div>

  </div>
</div>

  )
}

export default TopChefs