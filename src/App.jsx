import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import UserForm from './components/UserForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Home />
        {/* <UserForm/> */}
    </div>
  )
}

export default App
