import React from 'react'
import Overview from '../Components/Overview'
import Sidebar from '../Components/Sidebar'

const Home = () => {
  return (
    <div>
        <div className='flex border'>
        <Sidebar/>
        <Overview/>
        </div>
      
    </div>
  )
}

export default Home
