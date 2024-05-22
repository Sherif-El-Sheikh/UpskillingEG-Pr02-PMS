import { SideBar, Navbar } from '../components/shared'
import { Outlet } from 'react-router-dom'

const MasterLayout = () => {
  return (
    <div>
      <div className='Navbar bg-success'>
        <Navbar />
      </div>
      <div className=' d-flex master'>
        <div className=''>
          <SideBar/>
        </div>
        <div className='content w-100'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default MasterLayout
