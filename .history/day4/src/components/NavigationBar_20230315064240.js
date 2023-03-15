import React from 'react'
import { Link } from 'react-router-dom'
const NavigationBar = () => {
  return (
    <div>asdasd
      <ul>
      
          <li>
          <Link to="/">
         home
          </Link>
        </li>
          <li>
          <Link to="/Work">
           work
          </Link>
        </li>
          <li>
          <Link to="/Contact">
            hhoojk
          </Link>
        </li>
          <li>
          <Link to="/Cart">
            hhoojk
          </Link>
        </li>
          <li>
          <Link to="/HookUse">
            hook sample
          </Link>
        </li>
     </ul>
    </div>
  )
}

export default NavigationBar