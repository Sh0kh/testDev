import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Style/Error.css'
function Error() {
  return (
    <div className='Error'>
      <div className='Error-content'>
          <h1>
            Hato<span>!</span>
          </h1>
         <NavLink>
            Bo`sh sahifa
         </NavLink>
      </div>
    </div>
  )
}

export default Error