import { useState } from 'react'
import './App.css'
import CartSection from './Components/CartSection/CartSection'
import Courses from './Components/Courses/Courses'
import Header from './Components/Headear/Header'

function App() {
  const [carts, setCarts] = useState([])
  const [credits, setCredits] = useState(0)
  const [remainingCredit, setRemaining] = useState(20)


  const handleButton = (course, credit_hours) => {
    const newCart = [...carts, course]
    setCarts(newCart)

    const newcredit = credits + credit_hours
    setCredits(newcredit)

    const newRemaining = remainingCredit - credit_hours;
    setRemaining(newRemaining)
  }

  return (
    <>
      <Header></Header>
      <div className='flex justify-around items-start'>
        <Courses handleButton={handleButton}></Courses>
        <CartSection remainingCredit={remainingCredit} credits={credits} carts={carts}></CartSection>
      </div>
    </>
  )
}

export default App