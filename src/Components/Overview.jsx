import React from 'react'
import Pots from './Pots'
import Budgets from './Budgets'

const Overview = () => {
  return (
    <div className='bg-[#FFB6C1] pl-[3rem] pr-[3rem] pu-[.5rem]'>

         <p className='font-bold text-2xl text-left pb-[1rem]'>Overview</p>
         
      <div className='flex gap-5'>
         <div className='bg-black grow text-white h-[5rem] text-left rounded'>
                   <p className=' pl-[2rem] pr-[2rem] text-xm'>Current Balance</p>
                  <p className='text-2xl font-bold pl-[2rem] pr-[2rem]'> $4,328.00</p>
        </div>
        <div className='text-left rounded grow bg-white'>
                    <p className='text-xm pl-[2rem]'>Income</p>
                    <p className='text-xl font-bold pl-[2rem] pr-[2rem]'> $4,328.00</p>
        </div>
        <div className='text-left rounded grow bg-white'>
                    <p className='pl-[2rem] pr-[2rem] text-xm'>Expences</p>
                    <p className='text-xl font-bold pr-[2rem] pl-[2rem]'> $4,328.00</p>
        </div>
      </div>


      <div className='flex'> 
      <Pots/>
      <Budgets/>

      </div>
    </div>
  )
}

export default Overview
