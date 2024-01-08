import { useState } from 'react'
import Sidebar from './component/SideBar'
import Header from './component/header/Header'
import Payments from './component/payment/payment'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='main'>
         <Sidebar />
         <div className='layout'>
            <Header />
            <Payments />
         </div>
         
    </div>
      
    </>
  )
}

export default App
