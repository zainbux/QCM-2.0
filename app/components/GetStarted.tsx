'use client'


import { AiOutlineArrowDown } from 'react-icons/ai'

const GetStarted = () => {
  return (
    <div className='bg-blue-gradient bg-opacity-50 p-1 rounded-full cursor-pointer '>

        <div className='text-white rounded-full bg-primary md:w-40 md:h-40 w-40 h-40 text-center items-center flex hover:bg-slate-900'>   
            <div className='mx-auto mt-4 '>
                    <span className='font-poppins'>Get</span><br></br>
                    <span className='font-poppins'>Started</span>
                <AiOutlineArrowDown size={25} className='mt-2 mx-auto animate-bounce'/>
            </div>
        </div>

    </div>


  )
}

export default GetStarted   