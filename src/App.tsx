import { useState } from 'react'
import {BrowserRouter} from "react-router-dom"
import './App.css'
import { Button } from './components/ui/button'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Layout from './components/layout'
import { ThemeProvider } from './context/theme-provider'
import WeatherDashboard from './pages/weather-dashboard'
import CityPage from './pages/city-page'

function App() {
  // const [count, setCount] = useState(0)

  return (
   <div>
    <BrowserRouter>
    <ThemeProvider defaultTheme='dark'>
      <Layout>
        <Routes>
          <Route path='/' element={<WeatherDashboard/>} />
          <Route path='/city:cityname' element={<CityPage/>} />
          
        </Routes>
        HELLO
      </Layout>
    </ThemeProvider>
    </BrowserRouter>
   </div>
  )
}

export default App
