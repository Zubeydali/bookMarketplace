import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { setSelectedBook } from '../../pages/redux/slices/BookSlice'
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import "./Detail.scss"
import { addToBasket } from '../../pages/redux/slices/BasketSlices';
import { store } from '../../pages/redux/Store';


function BookDetail() {
  const { id } = useParams()
  console.log(id)
  
  const { books, selectedBook } = useSelector((store) => store.book)
  
  const { price, name, Image, description } = selectedBook
  console.log(selectedBook); // Seçilen kitap objesini kontrol et


  const [count, setCount] = useState(1)
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
      id,  // Bu dəyişən id redux store-da mövcud olan `id`-ni götürür
    name,  // selectedBook içindən `name` alınır
     price,  // selectedBook içindən `price` alınır
      description,  // selectedBook içindən `description` alınır
      count

    }
    console.log(payload);
    dispatch(addToBasket(payload));
  }
  useEffect(() => {


    getBookId();

  }, [books])

  const getBookId = () => {
    const book = books.find((book) => String(book._id) === String(id));  // Kitab tapılırsa
    if (book) {
        console.log("Kitab tapıldı:", book);  // Burada tapılan kitabı yoxlayaq
        dispatch(setSelectedBook(book));  // `setSelectedBook` ilə `selectedBook`-i Redux-a göndəririk
    } else {
        console.error("Kitab tapılmadı:", id);  // Kitab tapılmadıqda xəta mesajı
    }
};

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