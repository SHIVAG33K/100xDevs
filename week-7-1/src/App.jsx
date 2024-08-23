import { useState } from 'react'
import { Dashboard } from './components/Dashboard'
import {Landing} from "./components/Landing"

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Routes path="/dashboard" element = {<Dashboard />} />
      <Routes path="/" element = {<Landing />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
