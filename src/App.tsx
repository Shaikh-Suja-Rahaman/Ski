import { useState } from 'react'
import {BrowserRouter} from "react-router-dom"
import './App.css'
import { Button } from './components/ui/button'
import Layout from './components/layout'

function App() {
  // const [count, setCount] = useState(0)

  return (
   <div>
    <BrowserRouter>
      <Layout>
        HELLO
      </Layout>
    </BrowserRouter>
   </div>
  )
}

export default App
