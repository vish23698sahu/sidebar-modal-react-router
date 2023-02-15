import React from 'react'
import Modal from './components/Modal'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Team from './components/Team'
import Projects from './components/Projects'
import Calendar from './components/Calendar'
import Documents from './components/Documents'
import ModalButton from './components/ModalButton'

function App() {
  return (
    <section>
      <Home />
      <Routes>
        <Route path='/' element={<ModalButton />} />
        <Route path='/team' element={<Team />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/calendar' element={<Calendar />} />
        <Route path='/documents' element={<Documents />} />
      </Routes>

      <Modal />
      <Sidebar />
    </section>
  )
}

export default App
