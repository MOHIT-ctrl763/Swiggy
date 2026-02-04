import Header from './Header'
import Footer from './Fotter'
import { Outlet } from 'react-router-dom'
import RestaurantMenu from './RestuarentMenu'
import './Index.css'

function AppLayout() {
  return (
    <div className='app'>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>            
  )
}
export default AppLayout