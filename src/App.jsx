import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Create from './components/Create'
import Edit from './components/Edit'
import Contacts from './components/Contacts'

const App = () => {
  return (
    <div className='container mx-auto'>
      <Routes>
        <Route path="/" element={<Contacts />} />
        <Route path='/create' element={<Create />} />
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>
    </div>
  )
}

export default App