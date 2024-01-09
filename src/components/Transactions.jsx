import { v4 as uuidv4 } from 'uuid'

import { DownloadIcon } from '../assets/icons/DownloadIcon'
import { SearchIcon } from '../assets/icons/SearchIcon'
import { SortIcon } from '../assets/icons/SortIcon'
import { InfoIcon } from '../assets/icons/InfoIcon'
import { TriangleIcon } from '../assets/icons/TriangleIcon'
import Pagination from './Pagination'

const table_data = [
  {
    id: uuidv4(),
    orderId: '#281209',
    orderDate: '7 July, 2023',
    OrderAmount: '₹1,278.23',
    transactionFees: '₹22',
  },
  {
    id: uuidv4(),
    orderId: '#281209',
    orderDate: '7 July, 2023',
    OrderAmount: '₹1,278.23',
    transactionFees: '₹22',
  },
  {
    id: uuidv4(),
    orderId: '#281209',
    orderDate: '7 July, 2023',
    OrderAmount: '₹1,278.23',
    transactionFees: '₹22',
  },
  {
    id: uuidv4(),
    orderId: '#281209',
    orderDate: '7 July, 2023',
    OrderAmount: '₹1,278.23',
    transactionFees: '₹22',
  },
  {
    id: uuidv4(),
    orderId: '#281209',
    orderDate: '7 July, 2023',
    OrderAmount: '₹1,278.23',
    transactionFees: '₹22',
  },
  {
    id: uuidv4(),
    orderId: '#281209',
    orderDate: '7 July, 2023',
    OrderAmount: '₹1,278.23',
    transactionFees: '₹22',
  },
  {
    id: uuidv4(),
    orderId: '#281209',
    orderDate: '7 July, 2023',
    OrderAmount: '₹1,278.23',
    transactionFees: '₹22',
  },
  {
    id: uuidv4(),
    orderId: '#281209',
    orderDate: '7 July, 2023',
    OrderAmount: '₹1,278.23',
    transactionFees: '₹22',
  },
  {
    id: uuidv4(),
    orderId: '#281209',
    orderDate: '7 July, 2023',
    OrderAmount: '₹1,278.23',
    transactionFees: '₹22',
  },
  {
    id: uuidv4(),
    orderId: '#281209',
    orderDate: '7 July, 2023',
    OrderAmount: '₹1,278.23',
    transactionFees: '₹22',
  },
  {
    id: uuidv4(),
    orderId: '#281209',
    orderDate: '7 July, 2023',
    OrderAmount: '₹1,278.23',
    transactionFees: '₹22',
  },
  {
    id: uuidv4(),
    orderId: '#281209',
    orderDate: '7 July, 2023',
    OrderAmount: '₹1,278.23',
    transactionFees: '₹22',
  },
  {
    id: uuidv4(),
    orderId: '#281209',
    orderDate: '7 July, 2023',
    OrderAmount: '₹1,278.23',
    transactionFees: '₹22',
  },
  {
    id: uuidv4(),
    orderId: '#281209',
    orderDate: '7 July, 2023',
    OrderAmount: '₹1,278.23',
    transactionFees: '₹22',
  },
  {
    id: uuidv4(),
    orderId: '#281209',
    orderDate: '7 July, 2023',
    OrderAmount: '₹1,278.23',
    transactionFees: '₹22',
  },
  {
    id: uuidv4(),
    orderId: '#281209',
    orderDate: '7 July, 2023',
    OrderAmount: '₹1,278.23',
    transactionFees: '₹22',
  },
  {
    id: uuidv4(),
    orderId: '#281209',
    orderDate: '7 July, 2023',
    OrderAmount: '₹1,278.23',
    transactionFees: '₹22',
  },
  {
    id: uuidv4(),
    orderId: '#281209',
    orderDate: '7 July, 2023',
    OrderAmount: '₹1,278.23',
    transactionFees: '₹22',
  },
  {
    id: uuidv4(),
    orderId: '#281209',
    orderDate: '7 July, 2023',
    OrderAmount: '₹1,278.23',
    transactionFees: '₹22',
  },
  {
    id: uuidv4(),
    orderId: '#281209',
    orderDate: '7 July, 2023',
    OrderAmount: '₹1,278.23',
    transactionFees: '₹22',
  },
]

const Transactions = () => {
  return (
    <div className='flex flex-col gap-5'>
      <h2 className='font-medium text-xl text-[#1A181E]'>
        Transactions | This Month
      </h2>
      <div className='p-3 pb-6 flex flex-col gap-3 rounded-lg bg-white shadow-[0_2px_6px_0px_rgba(26,24,30,0.04)]'>
        <div className='flex justify-between h-10'>
          <label
            htmlFor='search-orderid'
            className='w-[248px] flex items-center gap-2 py-[10px] px-4 bg-white border rounded'
          >
            <SearchIcon />
            <input
              type='search'
              placeholder='Search by order ID...'
              className='w-full focus:outline-none'
            />
          </label>
          <div className=' flex items-center gap-3'>
            <button className='flex items-center gap-[6px] text-[#4D4D4D] text-base border rounded py-[6px] px-3'>
              Sort <SortIcon />
            </button>
            <div className='p-2 rounded border'>
              <DownloadIcon />
            </div>
          </div>
        </div>
        <div className='grid grid-rows-[21] text-sm'>
          <div className='grid grid-cols-4 gap-10 py-[10px] px-3 bg-[#F2F2F2] rounded font-medium'>
            <p>Order ID</p>
            <p className='flex items-center gap-1'>
              Order date <TriangleIcon />
            </p>
            <p>Order amount</p>
            <p className='flex items-center gap-1 justify-self-end'>
              Transaction fees <InfoIcon />
            </p>
          </div>
          {table_data.map((row) => {
            return (
              <div
                key={row.id}
                className='grid grid-cols-4 gap-10 py-[14px] px-3 border-b border-[#E6E6E6]'
              >
                <a className='font-medium text-[#146EB4]'>{row.orderId}</a>
                <p>{row.orderDate}</p>
                <p className='ml-7'>{row.OrderAmount}</p>
                <p className='justify-self-end'>{row.transactionFees}</p>
              </div>
            )
          })}
        </div>
        <Pagination />
      </div>
    </div>
  )
}

export default Transactions
