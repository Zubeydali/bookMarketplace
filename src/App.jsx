
import './App.css'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/home/Home'
import Books from './components/books/Books'
import BookDetail from './components/detail/BookDetail'
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux';
import { store } from './pages/redux/Store'
import { calculateBasket, removeFromBasket, setDrawer } from './pages/redux/slices/BasketSlices'
import { useEffect } from 'react'


function App() {

  const { books, drawer,totalAmount } = useSelector((store) => store.basket)
  const dispatch = useDispatch()
 

  const onDelete = (id) => {
    dispatch(removeFromBasket(id)); 
  };
  
  

  useEffect(() => {
   dispatch(calculateBasket());
  }, [drawer]); // drawe
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='books' element={< Books />} />
            <Route path='/book-details/:id' element={< BookDetail />} />

          </Route>
        </Routes>
      </BrowserRouter>

      
      <Drawer className="drawer" onClose={() => dispatch(setDrawer())} anchor="left" open={drawer} sx={{
    padding: '20px',
    width: '300px',
    overflow: 'auto',
}}>
  {books && books.map((book) => {
    console.log('Book:', book);  
    return (
      <div key={book._id || book.name}>
        <div className="basket-div">
          <img src={book.Image} alt={book.name} style={{ maxWidth: '100%', height: 'auto' }} />
          <p>{book.price}</p>
          <p>{book.name}</p>
          <button onClick={() => onDelete(book._id)} style={{ background: 'red', color: 'white' }}>
                  Sil
                </button>
        </div>

      
      </div>
    );
  })}
    <div className="total">
         <p> mebleg:{totalAmount}</p>
        </div>
</Drawer>




    </>
  )
}

export default App
