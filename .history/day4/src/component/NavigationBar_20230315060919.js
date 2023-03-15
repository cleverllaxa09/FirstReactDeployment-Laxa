import React from 'react'
import { Link } from 'react-router-dom'
const NavigationBar = () => {
  return (
    <div>
      <ul>
      
          <li>
          <LInk to="/">
         home
          </LInk>
        </li>
          <li>
          <LInk to="/Work">
           work
          </LInk>
        </li>
          <li>
          <LInk to="/Contact">
            hhoojk
          </LInk>
        </li>
          <li>
          <LInk to="/Cart">
            hhoojk
          </LInk>
        </li>
          <li>
          <LInk to="/HookUse">
            hook sample
          </LInk>
        </li>
     </ul>
    </div>
  )
}

export default NavigationBar