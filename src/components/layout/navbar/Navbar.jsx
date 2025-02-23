import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

function Navbar() {
  return (
<ul>
  {/* <Link to='/'><li>Home</li></Link> */}
    <li><Link to='/'><b>Home</b></Link></li>
    <li><Link><b>BookStore</b></Link></li>
    <li><Link><b>about</b> </Link></li>
    <li><Link><b>Contact</b></Link></li>
   
</ul>
  )
}

export default Navbar