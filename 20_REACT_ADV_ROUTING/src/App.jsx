import React from 'react'
import Navbar from './components/Navbar'
import NavBar2 from './components/NavBar2'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Courses from './pages/Courses'
import Men from './pages/Men'
import Women from './pages/Women'
import NotFound from './pages/NotFound'
import { Routes, Route } from 'react-router-dom'
import CourseDetails from './pages/CourseDetails'
const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar/>
      <NavBar2/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/courses' element={<Courses/>} />
        <Route path='/courses/:id' element={<CourseDetails/>} />
        <Route path='/product' element={<Product/>}>
            <Route path='men' element={<Men/>} />
            <Route path='women' element={<Women/>} />
        
        </Route>

        <Route path= '*' element = {<NotFound/>}/>
      </Routes>


      <Footer/>
      
    </div>
  )
}

export default App