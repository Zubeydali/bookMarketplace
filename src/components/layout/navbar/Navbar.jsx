import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

function Navbar() {
  return (
<ul>
  {/* <Link to='/'><li>Home</li></Link> */}
    <li><Link to='/'>Home</Link></li>
    <li><Link>BookStore</Link></li>
    <li><Link>About </Link></li>
    <li><Link>Contact</Link></li>
   
</ul>
  )
}

export default Navbar