import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ text, className, link, onClick }) => {
  return (
    <div className='capitalized'>
      <Link to={link}>
        <button type="submit" className={className}>

          {text}
        </button>
      </Link>
    </div>
  )
}

export default Button