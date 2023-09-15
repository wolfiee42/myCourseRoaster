import './App.css'
import CartSection from './Components/CartSection/CartSection'
import Courses from './Components/Courses/Courses'
import Header from './Components/Headear/Header'

function App() {

  return (
    <>
      <Header></Header>
      <div className='flex justify-around items-center'>
        <Courses></Courses>
        <CartSection></CartSection>
      </div>
    </>
  )
}

export default App