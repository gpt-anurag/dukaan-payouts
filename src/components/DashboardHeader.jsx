import { DownIcon } from '../assets/icons/DownIcon'
import { GroupIcon } from '../assets/icons/GroupIcon'
import QuestionMarkIcon from '../assets/icons/QuestionMarkIcon'
import { SearchIcon } from '../assets/icons/SearchIcon'

const DashboardHeader = () => {
  return (
    <div className='py-3 px-8 grid grid-cols-3 gap-4 border-b-[#D9D9D9] border-b bg-white'>
      <div className='max-w-[360px] flex gap-4 items-center text-[15px]'>
        <p>Payments</p>
        <p className='flex items-center gap-[6px] text-xs'>
          {<QuestionMarkIcon />} How it works
        </p>
      </div>
      <div>
        <label
          htmlFor='search'
          className='max-w-[400px] bg-[#F2F2F2] py-[9px] px-4 flex gap-2 rounded-md items-center'
        >
          <SearchIcon />
          <input
            type='search'
            id='search'
            placeholder='Search features, tutorials, etc.'
            className='bg-transparent w-full focus:outline-none'
          />
        </label>
      </div>
      <div className='max-w[360px] flex justify-end gap-3 items-center'>
        <div className='p-[10px] bg-[#E6E6E6] rounded-full'>
          <GroupIcon />
        </div>
        <DownIcon />
      </div>
    </div>
  )
}

export default DashboardHeader
