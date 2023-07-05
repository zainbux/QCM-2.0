'use client'


import { AiOutlineExclamationCircle } from 'react-icons/ai'

const Discount = () => {
  return (
    <div className='rounded-sm p-1 py- w-80 flex justify-center items-center gap-1 text-dimWhite bg-slate-800 border border-gradient-blue'>

            <AiOutlineExclamationCircle className='text-secondary' size={20} />
            <p><span className='text-white'>20%</span> Discount For <span className='text-white' >New </span>Clients</p>

    </div>
  )
}

export default Discount