import { v4 as uuidv4 } from 'uuid'
import { HomeIcon } from '../assets/icons/HomeIcon'
import { ChevronDownIcon } from '../assets/icons/ChevronDownIcon'
import { OrdersIcon } from '../assets/icons/OrdersIcon'
import { ProductsIcon } from '../assets/icons/ProductsIcon'
import { DeliveryIcon } from '../assets/icons/DeliveryIcon'
import { MarketingIcon } from '../assets/icons/MarketingIcon'
import { AnalyticsIcon } from '../assets/icons/AnalyticsIcon'
import { PaymentsIcon } from '../assets/icons/PaymentsIcon'
import { ToolsIcon } from '../assets/icons/ToolsIcon'
import { DiscountsIcon } from '../assets/icons/DiscountsIcon'
import { AudienceIcon } from '../assets/icons/AudienceIcon'
import { AppearanceIcon } from '../assets/icons/AppearanceIcon'
import { PluginsIcon } from '../assets/icons/PluginsIcon'
import { useState } from 'react'
import { useEffect } from 'react'
import { WalletIcon } from '../assets/icons/WalletIcon'

const nav_elm = [
  {
    id: uuidv4(),
    name: 'Home',
    icon: <HomeIcon />,
    state: 'inactive',
  },
  {
    id: uuidv4(),
    name: 'Orders',
    icon: <OrdersIcon />,
    state: 'inactive',
  },
  {
    id: uuidv4(),
    name: 'Products',
    icon: <ProductsIcon />,
    state: 'inactive',
  },
  {
    id: uuidv4(),
    name: 'Delivery',
    icon: <DeliveryIcon />,
    state: 'inactive',
  },
  {
    id: uuidv4(),
    name: 'Marketing',
    icon: <MarketingIcon />,
    state: 'inactive',
  },
  {
    id: uuidv4(),
    name: 'Analytics',
    icon: <AnalyticsIcon />,
    state: 'inactive',
  },
  {
    id: uuidv4(),
    name: 'Payments',
    icon: <PaymentsIcon />,
    state: 'active',
  },
  {
    id: uuidv4(),
    name: 'Tools',
    icon: <ToolsIcon />,
    state: 'inactive',
  },
  {
    id: uuidv4(),
    name: 'Discounts',
    icon: <DiscountsIcon />,
    state: 'inactive',
  },
  {
    id: uuidv4(),
    name: 'Audience',
    icon: <AudienceIcon />,
    state: 'inactive',
  },
  {
    id: uuidv4(),
    name: 'Appearance',
    icon: <AppearanceIcon />,
    state: 'inactive',
  },
  {
    id: uuidv4(),
    name: 'Plugins',
    icon: <PluginsIcon />,
    state: 'inactive',
  },
]

const Sidebar = () => {
  const [navElm, setNavElm] = useState([])

  useEffect(() => {
    setNavElm(nav_elm)
  }, [])

  return (
    <div className='w-56 flex flex-col gap-4 justify-between bg-bgSidebar h-screen fixed text-white/80 py-4 px-[10px] font-medium text-[14px]'>
      <div className='flex flex-col gap-6'>
        <div className='flex justify-between gap-3 px-[6px] items-center'>
          <div className='h-[39px] w-[39px]'>
            <img
              src='/nishyan-logo.png'
              alt='Nishyan Logo'
              className='h-full w-full rounded object-cover'
            />
          </div>
          <div className='flex-1 flex flex-col gap-1'>
            <p className='text-white'>Nishyan</p>
            <p className='text-[13px] underline font-normal'>Visit store</p>
          </div>
          <div className='h-[20px] w-[20px] text-red-500'>
            <ChevronDownIcon />
          </div>
        </div>
        <div className='flex flex-col gap-1'>
          {navElm.map((elm) => {
            return (
              <a
                href='#'
                key={elm.id}
                className={`py-2 px-4 flex gap-3 hover:bg-white/5 rounded ${
                  elm.state === 'active' && 'text-white bg-white/10'
                }`}
              >
                <div>{elm.icon}</div>
                <p>{elm.name}</p>
              </a>
            )
          })}
        </div>
      </div>
      <div className='mx-[6px] flex items-center gap-3 rounded bg-[#353C53] py-[6px] px-3'>
        <div className='p-[6px] bg-white/10 rounded'>
          <WalletIcon />
        </div>
        <div className='flex flex-col gap-[2px]'>
          <p className='text-[13px] font-thin leading-4'>Available credits</p>
          <p className='text-[16px] text-white'>222.10</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
