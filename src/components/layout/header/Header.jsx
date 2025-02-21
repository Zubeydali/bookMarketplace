import React from 'react'
import Navbar from '../navbar/Navbar'
import "./Header.scss"
import { useNavigate } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import Drawer from '@mui/material/Drawer';
import { setDrawer } from '../../../pages/redux/slices/BasketSlices';
import Books from '../../books/Books';

function Header() {
  const navigate=useNavigate();
  const{books}=useSelector((store)=>store.basket)
 
  const dispatch=useDispatch()
  return (
    <>
      <div className="header">
        <div className="logo" onClick={()=>navigate("/")}>
          <img src="/src/assets/media//photo_5312316015176183082_x.jpg" alt="" />
        </div>
        <Navbar></Navbar>
        <div className="icon">
          <div className="search-inp">
            <input className='inp'  type="text" />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          

    <Badge onClick={()=>dispatch(setDrawer())} badgeContent={books.length} color="primary">
    <i className="fa-solid fa-basket-shopping"></i>
    </Badge>
  

    
       
          <i className="fa-solid fa-heart"></i>
        </div>
      </div>

    </>
  )
}

export default Header