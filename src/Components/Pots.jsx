import React from 'react'

const Pots = () => {
  return (
    <div className='m-[1rem]'>
      <div className='bg-white rounded'>
        <div className='flex'>
            <p className='font-extrabold'>Pots</p>
            <p>See Details</p>
        </div>
        <div className='flex '>
            <div className='flex p-[1rem]'>
              <div>
                <img src="" alt="" />
              </div>
              <div>
                <p >Total Saved</p>
                <p className='text-2xl font-bold'>$850</p>
              </div>
            </div>
            <div className='flex'>
                <div>
                     <div className='m-[.2rem] border-l-2 border-l-green-950'>
                         <p className='m-[.3rem]'>Saving</p>
                         <p className='font-bold text-lg '>$150</p>
                      </div>
                      <div className='m-[.2rem] border-l-2 border-l-red-950'>
                         <p>Gift</p>
                         <p className='font-bold text-lg'>$10</p>
                      </div>
                </div>
                <div>
                      <div className='m-[.2rem] border-l-2 border-l-grey-950'>
                         <p>Ticket</p>
                         <p className='font-bold text-lg'>$20</p>
                      </div>
                      <div className='m-[.2rem] border-l-2 border-l-blue-950'>
                         <p>Laptop</p>
                         <p className='font-bold text-lg'>$13</p>
                      </div>
                </div>

            </div>
        </div>

      </div>
      <div>
        <p>Transactions</p>
        
        </div>
    </div>
  )
}

export default Pots
