
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/home/Home'
import Books from './components/books/Books'
import BookDetail from './components/detail/BookDetail'


function App() {


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
    </>
  )
}

export default App
