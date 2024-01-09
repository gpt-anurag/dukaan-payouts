import Overview from './Overview'
import Transactions from './Transactions'

const DashboardMain = () => {
  return (
    <main className='p-8 bg-[#fafafa] min-h-screen flex flex-col gap-8'>
      <Overview />
      <Transactions />
    </main>
  )
}

export default DashboardMain
