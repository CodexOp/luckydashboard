import React, {useState, useEffect} from 'react';
import logo from '../../images/logo.png';
import Button from './Button';
import { MenuIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom';

import './navbar.scss';

 
 const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

   return (
     <div className='navbar_outer'>
         <div className='navbar_left'>
           <MenuIcon className='menu_icon' onClick={()=>{
            setNavbarOpen(!navbarOpen)
           }}/>
          <img src={logo} className="logo" alt="" />
         </div>
         <div className='navbar_right '>
             <ul className={`ul_nav ${navbarOpen ? " showMenu" : ""} `}>
             <div className='navbar_left slider_logo'>
           <MenuIcon className='menu_icon' onClick={()=>{
            setNavbarOpen(!navbarOpen)
           }}/>
          <img src={logo} className="logo" alt="" />
         </div>
              <Link to="/"><li className='navigations active' onClick={()=>setNavbarOpen(true)}>HOME</li></Link>
              <Link to="/dashboard" ><li className='navigations active' onClick={()=>setNavbarOpen(true)} >DASHBOARD</li></Link>
              <Link to="/stake" ><li className='navigations active' onClick={()=>setNavbarOpen(true)}>STAKE</li></Link>
              <Link to="/earn" ><li className='navigations active' onClick={()=>setNavbarOpen(true)}>EARN</li></Link>
              <li className='navigations active' onClick={()=>setNavbarOpen(true)}>DOCS</li>
             </ul>
             <button className='button button_secondary'>
               GAME
             </button>
             <Button />

         </div>
     </div>
   )
 }
 
 export default Navbar