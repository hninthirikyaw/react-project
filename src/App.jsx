import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Detail from './components/Detail'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Recipe from './components/Recipe'
import Search from './components/Search'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/recipe' element={<Recipe/>} />
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/contact' element={<Contact/>} />
        <Route path='/search/:name' element={<Search />} />
      </Routes>
    </div>
  )
}

export default App
