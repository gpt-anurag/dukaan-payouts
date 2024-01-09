import { LeftIcon } from '../assets/icons/LeftIcon'
import { RightIcon } from '../assets/icons/RightIcon'

const Pagination = () => {
  return (
    <div className='mt-6 flex justify-center font-medium text-sm gap-6 text-[#4D4D4D]'>
      <button className='p-[6px] pr-3 flex items-center gap-[6px] border rounded'>
        <LeftIcon /> Previous
      </button>
      <div className='flex justify-between text-center gap-1 font-normal'>
        <p className='py-2 h-7 w-7'>1</p>
        <p className='py-2 h-7 w-7'>...</p>
        <p className='py-2 w-7 bg-[#146EB4] font-medium text-white rounded'>
          10
        </p>
        <p className='py-2 h-7 w-7'>11</p>
        <p className='py-2 h-7 w-7'>12</p>
        <p className='py-2 h-7 w-7'>13</p>
        <p className='py-2 h-7 w-7'>14</p>
        <p className='py-2 h-7 w-7'>15</p>
        <p className='py-2 h-7 w-7'>16</p>
        <p className='py-2 h-7 w-7'>17</p>
        <p className='py-2 h-7 w-7'>18</p>
      </div>
      <button className='p-[6px] pl-3 flex items-center gap-[6px] border rounded'>
        Next <RightIcon />
      </button>
    </div>
  )
}

export default Pagination
