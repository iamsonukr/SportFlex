import React, { useEffect, useState } from 'react'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import TopChefs from '../../components/TopChefs/TopProducts.jsx'
import Testimonials from '../../components/Testimonials/Testimonial'
import Slider from '../../components/Slider/Slider'
import FAQs from '../../components/FAQs/Faq.jsx'

const Home = () => {

  return (
    <div>
      <Slider />
      <TopChefs />
     <FAQs/>
      <Testimonials />
    </div>
  )
}

export default Home