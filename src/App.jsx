import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Note from './components/Note'
import Create from './components/Create'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Note />}/>
          <Route path="/create" element={<Create />} />
        </Routes> 
      </Router>
    </>
  )
}

export default App;
