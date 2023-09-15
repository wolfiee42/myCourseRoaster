import { useState } from 'react'
import './App.css'
import CartSection from './Components/CartSection/CartSection'
import Courses from './Components/Courses/Courses'
import Header from './Components/Headear/Header'
import Swal from 'sweetalert2'

function App() {
  const [carts, setCarts] = useState([])
  const [credits, setCredits] = useState(0)
  const [remainingCredit, setRemaining] = useState(20)


  const handleButton = (course, credit_hours) => {
    const isExist = carts.find(cart => cart.id === course.id)


    const newcredit = credits + credit_hours;
    const newRemaining = remainingCredit - credit_hours;

    if (isExist) {
      Swal.fire({
        title: 'You already selected this course',
        icon: 'info',
        confirmButtonText: 'Close'
      })
    } else {
      const newCart = [...carts, course]
      setCarts(newCart)

      if (newcredit > 20) {
        Swal.fire({
          title: 'Credit Limit Exceeded',
          icon: 'error',
          confirmButtonText: 'Close'
        })
      } else {
        setCredits(newcredit)
        setRemaining(newRemaining)
      }
        
      
    }
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