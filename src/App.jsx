import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <button className="btn btn-active">Default</button>
<button className="btn btn-active btn-neutral">Neutral</button>
<button className="btn btn-active btn-primary">Primary</button>
  </>
  )
}

export default App
