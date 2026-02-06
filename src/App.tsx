import { useState } from 'react'
import './App.css'
import Home from './screen/Home'
import Yes from './screen/Yes'
import Story from './screen/Story'
import { BrowserRouter as Router , Route , Routes} from 'react-router-dom'
function App() {


  return (
    <>
      <Router>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/yes' element={<Yes/>}/>
    <Route path='/story' element={<Story/>}/>
    </Routes>
    </Router>
    </>
  )
}

export default App
