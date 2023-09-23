import TopNav from 'Components/TopNav'
import React from 'react'

const Home = () => {
  return (
    <div className='bg-[#150E28] text-white mont'>
      <TopNav style="home" className={"btn-bg border border-[#9A39FF] h-14 px-8 rounded"} link={"/register"} />
    </div>
  )
}

export default Home