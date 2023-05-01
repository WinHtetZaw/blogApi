import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Blogs from './features/components/Blogs'
import CreateCart from './features/components/CreateCart'
import Detail from './features/components/Detail'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Blogs/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/create' element={<CreateCart/>}/>
      </Routes>
    </div>
  )
}

export default App
