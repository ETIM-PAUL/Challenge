import TopNav from 'Components/TopNav'
import React from 'react'

const Home = () => {
  return (
    <div className='bg-[#150E28] text-white mont'>
      <TopNav style="home" link={"/register"} />
    </div>
  )
}

export default Home