import React from 'react'
import Navbar from '../navbar/Navbar'
import "./Header.scss"

function Header() {
  return (
   <>
<div className="header">
    <div className="logo"><h3>LibrX</h3></div>
<Navbar></Navbar>
<div className="icon">
<div className="search-inp">
<input type="text" />
<i className="fa-solid fa-magnifying-glass"></i>
</div>
   
    <i className="fa-solid fa-basket-shopping"></i>
    <i className="fa-solid fa-heart"></i>

</div>
</div>

   </>
  )
}

export default Header