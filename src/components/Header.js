import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return ( 
    <header>
      <Link to={'/'}>
        <img src="assets/img/logo.jpeg" alt="LOGO" />
      </Link>
     </header>
   );
}
 
export default Header;