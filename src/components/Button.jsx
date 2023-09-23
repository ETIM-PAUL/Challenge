import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ text, style, link, className }) => {
  return (
    <div className='capitalized'>
      <Link to={link}>
        <button className={`${style === "register" ? "btn-bg border border-[#9A39FF]" : "btn-border "} h-14 px-8 rounded ${className}`}>
          {text}
        </button>
      </Link>
    </div>
  )
}

export default Button