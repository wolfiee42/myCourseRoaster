import { useState } from 'react'
import './App.css'
import CartSection from './Components/CartSection/CartSection'
import Courses from './Components/Courses/Courses'
import Header from './Components/Headear/Header'

function App() {
  const [carts, setCarts] = useState([])
  const handleButton = (course) => {
    const newCart = [...carts, course]
    setCarts(newCart)
  }

  return (
    <>
      <Header></Header>
      <div className='flex justify-around items-start'>
        <Courses handleButton={handleButton}></Courses>
        <CartSection carts={carts}></CartSection>
      </div>
    </>
  )
}

export default App