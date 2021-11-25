import React from 'react'
import navStyles from '../styles/Navbar.module.css'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Navbar = () => {
    return (
      <div className={navStyles.bgnav}>
      <nav className={navStyles.navbar}>
       <div className={navStyles.home_nav}>
         <a href="#home">Home</a>       
         <form>
           <input type="search" name="q" placeholder="Search query"/>
           <input type="submit" value="Go!"/>
         </form>
         <button><FontAwesomeIcon icon={faBars} /></button>
       </div>
       <div className={navStyles.links}>
         <a href="#news">friends</a>
         <a href="#news">messages</a>
         <a href="#news">notifications</a>
         <a href="#contact">setings</a>
       </div>
     </nav> 
     </div>
   )
}

export default Navbar
