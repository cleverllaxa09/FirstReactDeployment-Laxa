import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <div>NavigationBar
      <ul>
        <li>
          <Link to='/'>
            home
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default NavigationBar