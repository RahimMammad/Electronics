import React from 'react'
import { Route, Routes } from 'react-router-dom'
import "./App.scss"
import Layout from './layouts'
import Home from './pages/Home'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import ContactPage from './pages/ContactPage'
import About from './pages/About'
import Cart from './pages/Cart'
import Detail from './pages/Details'
import BasketProvider from './context/BasketContext'

const App = () => {
  return (
    <BasketProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/signup' element={<SignUpPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/about' element={<About />} />
            <Route path='/cart' element={<Cart />} />
            <Route path="/products/:id" element={<Detail />} />
          </Route>
        </Routes>
    </BasketProvider>
  )
}

export default App