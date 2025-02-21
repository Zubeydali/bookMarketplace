import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Books.scss"

function Books({ book }) {
  if (!book) return null;
  const{name,price,categoryId,_id}=book;
  const navigate=useNavigate();
  console.log(book, "book")
  return (
    <>
      <div className="container">
        <div className="cards">
          <div className="card"> 
            <img src={book?.Image} alt="" />
         <b>   <p>{ book?.name}</p></b>
            <p>{book?.price}</p>
            <button onClick={()=>navigate(`/book-details/${_id}`)}>detail</button>

          </div>
        </div>
      </div>


    </>

  )
}

export default Books