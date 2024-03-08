import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from './Pages/Landing/index'

function App() {

const [token, setToken] = useState();

if (!token) {
  return <Login setToken={setToken}/>;
}

  return (
    <>
      <Landing/>
    </>
  )
}

export default App
