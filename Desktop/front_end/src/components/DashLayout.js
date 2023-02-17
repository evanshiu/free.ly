import { Outlet } from 'react-router-dom'
import DashHeader from './DashHeader'
import DashFooter from './DashFooter'

// login required area
export const DashLayout = () => {
  return (
    <>
        <DashHeader />
        <div className='dash-container'> 
            <Outlet/>
        </div>
        <DashFooter/>
    </>
    
  )
}
export default DashLayout