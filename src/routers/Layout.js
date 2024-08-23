import React from 'react'
import Nave from '../pages/Nave'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
        <Nave />
        <Outlet />
    </div>
  )
}
