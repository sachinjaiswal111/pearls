import React, { useEffect, useState } from 'react'
import Footer from './Components/Footer'
import Header from './Components/Header'
import { CartProvider } from './Components/Cart/CartContext.jsx'
import { Outlet } from 'react-router'

const App = () => {

  return (
    <>
        <CartProvider>
            <Header />
            <Outlet />
            <Footer />
        </CartProvider>
    </>
  )
}

export default App