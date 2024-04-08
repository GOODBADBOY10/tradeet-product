import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Fashion from './components/Fashion'
import EachItem from './components/EachItem'
import Review from './components/Review'
import Women from './components/Women'
import Men from './components/Men'
import Kids from './components/Kids'
import Shopping from './components/Shopping'
import Shipping from './components/Shipping'

function App() {
  
  return (
    <>
     <Fashion />
    </>
  )
}

export default App
