import React from 'react'
import Navlink from './navlink'

const Header = () => {
  return (
    <div className="bg-gray-900/90 backdrop-blur-lg shadow-lg border-b border-gray-700/50 flex justify-center fixed w-full top-0 z-50">

    <div className="flex justify-between gap-12 items-center px-8 py-4 shadow-xl">
        <Navlink href="/" name="Home" />
        <Navlink href="/product" name="Product" />
        <Navlink href="/dashboard" name="Dashboard" />
    </div>
    
    </div>
  )
}

export default Header;