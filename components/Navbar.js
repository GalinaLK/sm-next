import React, {useState} from 'react'
import navStyles from '../styles/Navbar.module.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';



const Navbar = () => {

  const [open, setOpen] = useState(false);

  function toggleNavg() {
    //const btn = document.getElementById('toggleNav')
    //const nav = document.getElementById('menu')
   if(open){
     setOpen(false)
   } else {
     setOpen(true)
   }
    //btn.classList.toggle('open')
    //nav.classList.toggle('hidden')
    //document.body.classList.toggle('no-scroll')
  }

    return (
      <div className={navStyles.bgnav}>
      <nav className={navStyles.navbar}>
       <div className={navStyles.home_nav}>
         <a href="#home">Home</a>       
         <form>
           <input type="search" name="q" placeholder="Search query"/>
           <input type="submit" value="Go!"/>
         </form>
         <button id="toggleNav" onClick={toggleNavg}>
           <FontAwesomeIcon icon={open ? faTimes : faBars} />
         </button>

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
