import React, { useContext, useEffect } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodDisplayItem from '../FoodDisplayItem/SportsDisplayItem'
import { foodList } from '../../assets/assets'
import SportsDisplayItem from '../FoodDisplayItem/SportsDisplayItem'

const FoodDisplay = ({ category }) => {

    // getting the food_list from the Context
    // const { food_list } = useContext(StoreContext)
    useEffect(()=>{
        console.log(foodList)
    })
    
    return (
        <div className='food-display' id='food-display'>
            <h2>Top Dishes Near you</h2>
            <div className="food-display-list">
                {
                    foodList.map((item, index) => {
      
                        // for each  item if category is all every item is display or if the item passes the second condition it will be displayed
                        if(category==="All" || category===item.category)
                        return ( 
                            // passing valus and id which will be used to add ,remove particular item from the Cart
                            <SportsDisplayItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FoodDisplay