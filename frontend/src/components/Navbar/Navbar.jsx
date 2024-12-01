import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';


const Navbar = ({setShowLogin}) => {
    const [menu,setMenu]=useState("home");
    const {getCartItemsLength}=useContext(StoreContext);
    const {token,setToken}=useContext(StoreContext)
   

    // go to certain page after doing certain thing
    const navigate=useNavigate()

    const logout=()=>{
        localStorage.removeItem("token");
        setToken()
        navigate('/')
    }
    useEffect(()=>{
        console.log(token)
    },[token])

  return (
    <div className='navbar'>
        {/* link to open home in navbar */}
        <Link to={'/'}> <img src={assets.logo} alt="" className="logo" /></Link>

        {/* navbar menu */}
        <ul className="navbar-menu">
            <Link to='/' onClick={()=>setMenu('home')} className={menu==='home'?"active":""} >Home</Link>
            <Link to='/products/men' onClick={()=>setMenu('men')} className={menu==='men'?"active":""}>Men</Link>
            <Link to='/products/women' onClick={()=>setMenu('women')} className={menu==='women'?"active":""}>Women</Link>
            <Link to='/products/children' onClick={()=>setMenu('children')} className={menu==='children'?"active":""}>Children</Link>
            <Link to='/custom' onClick={()=>setMenu('lanyard')} className={menu==='lanyard'?"active":""}>Lanyard</Link>
        </ul>

        {/* right navbar */}
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <Link to={'/cart'}><img src={assets.cart_icon} alt="" className='cart-icon' /></Link>
                {
                    getCartItemsLength()===0
                    ?<></>
                    :<div className="dot"></div>
                }
                
            </div>
            {/* setting up the showLogin value  */}
            {
                !token?<button onClick={()=>setShowLogin(true)}>sign in</button>
                :<div className='navbar-profile'>
                    <img src={assets.profile_icon} alt="" />
                    <ul className="nav-profile-drop-down">
                        <li onClick={()=>navigate('/myorders')} ><img src={assets.cart_icon} alt="" className='cart-icon' /><p>Orders</p></li>
                        <hr />
                        <li onClick={logout} ><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
                    </ul>

                </div>
            }
            
        </div>
    </div>
  )
}

export default Navbar