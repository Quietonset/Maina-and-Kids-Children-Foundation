import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MenuBar from '../components/MenuBar'

const Root = () => {
  return (
    <div className='font-kumbh'>
        <Navbar/>
        <MenuBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Root
