import React from 'react'
import Top from '../top/Top'
import Bottom from '../bottom/Bottom.jsx'
import Routers from '../../routers/Routers'

const Layout = () => {
  return <>
    <Top/>
    <div>
        <Routers/>
    </div>
    <Bottom/>
  </>
}

export default Layout
