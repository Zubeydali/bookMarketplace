
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/home/Home'
import Books from './components/books/Books'
import BookDetail from './components/detail/BookDetail'
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux';
import { store } from './pages/redux/Store'
import { setDrawer } from './pages/redux/slices/BasketSlices'


function App() {

const{books,drawer}=useSelector((store)=>store.basket)
const dispatch=useDispatch()
  return (
    <>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='books' element={< Books/>}/>
          <Route path='/book-details/:id' element={< BookDetail/>}/>
         
        </Route>
      </Routes>
    </BrowserRouter>
    <Drawer  className='drawer' onClose={()=>dispatch(setDrawer())} anchor='left' open={drawer} >
      {
  books && books.map((book)=>{
<div>
  <img src={book.image}alt="" />
  <p>{book.price}</p>
</div>
  })}
  </Drawer>
    </>
  )
}

export default App
