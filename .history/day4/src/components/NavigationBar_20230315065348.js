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
         <li>
          <Link to='/Work'>
        work
          </Link>
        </li>
         <li>
          <Link to='/Contact'>
  Contact
          </Link>
        </li>
         <li>
          <Link to='/Cart'>
Cart
          </Link>
        </li>
         <li>
          <Link to='/HookUse'>
            hook
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default NavigationBar