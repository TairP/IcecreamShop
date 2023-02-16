import React from 'react'
import Header from '../headers/Header'
import Footer from '../footer/Footer.jsx'
import Routers from '../../routers/Routers'

const Layout = () => {
  return <>
    <Header/>
    <div>
        <Routers/>
    </div>
    <Footer/>
  </>
}

export default Layout
