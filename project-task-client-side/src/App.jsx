import { Outlet } from 'react-router-dom'
import Navbar from './components/Header/Navbar'
import Footer from './components/Footer/Footer'


function App() {


  return (
    <> 
      <div className='font-Poppins bg-background   dark:bg-darkbackground'>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
        {/* <CountdownTimer></CountdownTimer> */}
      </div>
    </>
  )
}

export default App
