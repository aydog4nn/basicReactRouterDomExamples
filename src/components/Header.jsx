import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <Link to="/home">Anasayfa</Link>
        <Link to="/about">Hakkında</Link>
        <Link to="/products">Ürünler</Link>
        <Link to="/contact">İletişim</Link>
    </div>
  )
}

export default Header