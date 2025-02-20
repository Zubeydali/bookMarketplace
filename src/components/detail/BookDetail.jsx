import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { setSelectedBook } from '../../pages/redux/slices/BookSlice'
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import "./Detail.scss"
import { addToBasket } from '../../pages/redux/slices/BasketSlices';

function BookDetail() {
  const { id } = useParams()
  console.log(id)
  const { books, selectedBook } = useSelector((store) => store.book)
  const { price, name,Image, description } = selectedBook
  console.log(selectedBook); // Seçilen kitap objesini kontrol et


  const [count, setCount] = useState(0)
  const dispatch = useDispatch();

  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  const addBasket = () => {
    const payload = {
      id,
      Image,
      name,
      price,
      description,
      count

    }
    console.log(payload);
    dispatch(addToBasket(payload));
  }
  useEffect(() => {


    getBookId();

  }, [])

  const getBookId = () => {
    books && books.map((book) => {
      if (book._id === id) {
        dispatch(setSelectedBook(book));
      }
    })
  }

  return (
    <div>

      <div className="detail" >

        <div className="img">
          <img src={selectedBook?.Image} alt="" />
        </div>
        <div className="text">
          {selectedBook.name}
          <br />
          {selectedBook.price}
          <br />
          {selectedBook.description}
          <br />
          <div className='icon'>
            <CiCirclePlus onClick={increment} />   <span>{count}</span> <CiCircleMinus onClick={decrement} />

          </div>
          <br />
          <button onClick={addBasket}>sebete elave et</button>
        </div>
      </div>

    </div>
  )
}

export default BookDetail