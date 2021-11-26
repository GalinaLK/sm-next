import React, {useState} from 'react'
import navStyles from '../styles/Navbar.module.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';



const Navbar = () => {

  const [open, setOpen] = useState(false);
  const [linksClasses, setlinksClasses] = useState(navStyles.links);

  //let linksClasses = null;

  function toggleNavg() {
    const nav = document.getElementById('navLinks')
    nav.classList.toggle('hidden')
    const classes = open
    ? `${navStyles.hidden} ${navStyles.links}`
    : navStyles.links;
    setlinksClasses(classes)
console.log(linksClasses)

    if(open){
     setOpen(false)
   } else {
     setOpen(true)
   }
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
       <div id="navLinks" className={linksClasses}>
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
