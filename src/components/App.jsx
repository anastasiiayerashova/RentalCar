import HomePage from '../pages/HomePage/HomePage.jsx'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import CatalogPage from '../pages/CatalogPage/CatalogPage.jsx'

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/catalog' element={<CatalogPage/> } />
    </Routes>
  )
}

export default App
