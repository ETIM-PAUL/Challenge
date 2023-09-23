import React from 'react'
import Button from './Button'
import { Link, NavLink } from 'react-router-dom'

const TopNav = ({ style, link, className }) => {
  return (
    <div className="navbar justify-between px-20 lg:px-32 py-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
        </div>

        <Link to={"/"} className='font-bold leading-1 text-lg sm:text-3xl clash'>
          <span className="text-white">get</span>
          <span className="text-[#D434FE]">linked</span>
        </Link>

      </div>
      <div className="navbar-center mont text-white navbar-en hidden md:flex gap-10 sp">
        <ul className="menu menu-horizontal text-base text-normal">
<NavLink to="/timeline" className={({ isActive, isPending }) =>
    isActive ? "active-css" : ""
  }>
          <li className='px-4'>Timeline</li>
</NavLink>
<NavLink to="/overview" className={({ isActive, isPending }) =>
    isActive ? "active-css" : ""
  }>
          <li className='px-4'>Overview</li>
</NavLink>
<NavLink to="/faqs" className={({ isActive, isPending }) =>
    isActive ? "active-css" : ""
  }>
          <li className='px-4'>FAQs</li>
</NavLink>
 <NavLink to="/contact-us" className={({ isActive, isPending }) =>
    isActive ? "active-css" : ""
  }>
          <li className='px-4'>Contact</li>
 </NavLink>         
        </ul>
        <div className="navbar-en">
          <Button text="Register" className={className} link="/register" />
        </div>
      </div>
    </div>
  )
}

export default TopNav