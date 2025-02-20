import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBooks } from '../../pages/redux/slices/BookSlice'
import Books from '../books/Books'

function BookList() {
  const dispatch = useDispatch();
  const { books } = useSelector((store) => store.book);
  console.log(books,"hellobook")
  useEffect(() => {
    dispatch(getAllBooks())
  }, [])


  return (
    <div>
      {
        books && books.map((book) => {
          return <Books key={book._id} book={book} />
        })
      }
      </div>
  )
}

export default BookList