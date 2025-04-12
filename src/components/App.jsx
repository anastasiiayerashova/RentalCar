import HomePage from '../pages/HomePage/HomePage.jsx'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import CatalogPage from '../pages/CatalogPage/CatalogPage.jsx'
import DetailsPage from '../pages/DetailsPage/DetailsPage.jsx'

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/catalog' element={<CatalogPage />} />
      <Route path='/cars/:id' element={<DetailsPage/> } />
    </Routes>
  )
}

export default App
