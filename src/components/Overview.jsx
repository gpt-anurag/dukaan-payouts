const Overview = () => {
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex justify-between items-center'>
        <h1 className='font-medium text-[20px] text-[#1A181E]'>Overview</h1>
        <div className='px-[14px] rounded border h-9 w-[137px] flex items-center bg-white'>
          <label htmlFor='month-select'>
            <select name='month' id='month-select'>
              <option value='last-month'>Last Month</option>
            </select>
          </label>
        </div>
      </div>
      <div className='flex justify-between gap-5'>
        <div className='flex flex-col gap-4 bg-white p-5 w-full rounded-lg shadow-[0_2px_6px_0px_rgba(26,24,30,0.04)]'>
          <h2 className='text-[#4D4D4D]'>Online orders</h2>
          <p className='font-medium text-[32px] text=[#1A181E]'>231</p>
        </div>
        <div className='flex flex-col gap-4 bg-white p-5 w-full rounded-lg shadow-[0_2px_6px_0px_rgba(26,24,30,0.04)]'>
          <h2 className='text-[#4D4D4D]'>Amount received</h2>
          <p className='font-medium text-[32px] text=[#1A181E]'>
            ₹23,92,312.19
          </p>
        </div>
      </div>
    </div>
  )
}

export default Overview
