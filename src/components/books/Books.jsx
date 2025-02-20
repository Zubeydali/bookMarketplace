import React from 'react'
import { useNavigate } from 'react-router-dom'

function Books({ book }) {
  if (!book) return null;
  const{name,price,categoryId,_id}=book;
  const navigate=useNavigate();
  console.log(book, "book")
  return (
    <>
      <div className="container">
        <div className="cards">
          <div className="card"> <p>
            {
              book?.name
            }
          </p>
            <p>{book?.price}</p>
            <img src={book?.Image} alt="" />

            <button onClick={()=>navigate(`/book-details/${_id}`)}>detail</button>

          </div>
        </div>
      </div>


    </>

  )
}

export default Books