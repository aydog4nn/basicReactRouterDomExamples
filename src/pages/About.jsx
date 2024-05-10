import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
function About() {
  return (
    <div>
        <h1>About</h1>
        <hr />
        <Link to="employee">Calısanlar Hakkında</Link>
        <Link to="company">Sirket Hakkında</Link>
        <Outlet></Outlet>
    </div>
  )
}

export default About