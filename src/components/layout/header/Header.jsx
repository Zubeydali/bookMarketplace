import React from 'react'
import Navbar from '../navbar/Navbar'
import "./Header.scss"
import { useNavigate } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';


function Header() {
  const navigate=useNavigate();
  const{books}=useSelector((store)=>store.basket)
  return (
    <>
      <div className="header">
        <div className="logo" onClick={()=>navigate("/")}>
          <img src="/src/assets/media//photo_5312316015176183082_x.jpg" alt="" />
        </div>
        <Navbar></Navbar>
        <div className="icon">
          <div className="search-inp">
            <input type="text" />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          

    <Badge badgeContent={books.lenght} color="primary">
    <i className="fa-solid fa-basket-shopping"></i>
    </Badge>
  


       
          <i className="fa-solid fa-heart"></i>
        </div>
      </div>

    </>
  )
}

export default Header