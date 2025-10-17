import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import First ,{Fruit1} from './1stcom.jsx'
import Fruit2 from './1stcom'
import Hideandshow from './2ndcom'
import Multcond from './2ndcom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <First/>
    <Fruit1/> */}
    <Fruit2/>
    {/* <Hideandshow/> */}
    <Multcond/>
    </>
  )
}

export default App
