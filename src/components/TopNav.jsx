import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const TopNav = ({ style, link }) => {
  return (
    <div className="navbar justify-between px-28 py-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>

        </div>
        <Link to={"/"} className='font-bold leading-1 text-lg sm:text-3xl clash'>
          <span className="text-white">get</span>
          <span className="text-[#D434FE]">linked</span>
        </Link>
      </div>
      <div className="navbar-center mont text-white navbar-en hidden lg:flex gap-10 sp">
        <ul className="menu menu-horizontal text-base text-normal">
          <li className='px-4'>Timeline</li>
          <li className='px-4'>Overview</li>
          <li className='px-4'>FAQs</li>
          <li className='px-4 contact-css'>Contact</li>
        </ul>
        <div className="navbar-en">
          <Button text="Register" style={style} link={link} />
        </div>
      </div>
    </div>
  )
}

export default TopNav