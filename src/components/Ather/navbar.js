import React from 'react'
import { Link } from 'react-router-dom';
import '../../css/navbar.css'
 function NavbarCart() {
  return (
    <div className='Nav'>
        <div className='Links'>
          <div>
            <Link to='/'>Logo</Link>
          </div>
            <div>
              <Link to="/shop">shop</Link>
              <Link to="/user">User</Link>
            </div>
        </div>
    </div>
  )
}
export default NavbarCart;