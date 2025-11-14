import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Pnf from './pages/Pnf'
import View from './pages/View'
import WishList from './pages/WishList'





function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/wishlist' element={<WishList/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/products/:id/view' element={<View/>}/>
        <Route path='/*' element={<Pnf/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
