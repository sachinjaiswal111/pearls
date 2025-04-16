import React, { useEffect, useState } from 'react'
import Footer from './Components/Footer'
import Header from './Components/Header'
import { Outlet } from 'react-router'

const App = () => {

  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default App