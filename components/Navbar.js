import React, {useState} from 'react'
import navStyles from '../styles/Navbar.module.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';



const Navbar = () => {

  const [open, setOpen] = useState(false);
  const [linksClasses, setlinksClasses] = useState(`${navStyles.hidden} ${navStyles.links}`
  );

  function toggleNavg() {
    
    const classes = open
    ? `${navStyles.hidden} ${navStyles.links}`
    : navStyles.links;
    setlinksClasses(classes)

    if(open){
     setOpen(false)
   } else {
     setOpen(true)
   }
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
         <button id="toggleNav" className={navStyles.togleNav} onClick={toggleNavg}>
           <FontAwesomeIcon icon={open ? faTimes : faBars} />
         </button>
       </div>
       <div className={linksClasses}>
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
