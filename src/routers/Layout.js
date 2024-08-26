import React from 'react'
import Nave from '../pages/Nave'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import FooterTop from '../components/Footer/FooterTop'

export default function Layout() {
  return (
    <div>
        <Nave />
        <Outlet />
        <FooterTop />
        <Footer />
    </div>
  )
}
