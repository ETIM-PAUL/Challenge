import TopNav from 'Components/TopNav'
import React from 'react'
import designer_img from '../assets/designer_man.svg'

const Login = () => {
  return (
    <div className='bg-[#150E28] text-white mont'>
      <TopNav style="register" />
      <section className='pr-28 py-10'>
        <div className="flex gap-4">
          <img src={designer_img} />

          <div className='border-xl w-full rounded-xl shadow-[0px 4px 4px 0px rgba(0, 0, 0, 0.25)] bg-[#ffffff08] p-20'>
            <div>
              <span className="text-[#D434FE] clash text- font-semibold sm:text-3xl">Register</span>
              <div>
                <p>Be part of this movement!</p>
                <span></span>
                <span className=''>CREATE YOUR ACCOUNT</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login