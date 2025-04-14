import HomePage from '../pages/HomePage/HomePage.jsx'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import CatalogPage from '../pages/CatalogPage/CatalogPage.jsx'
import DetailsPage from '../pages/DetailsPage/DetailsPage.jsx'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function App() {

  const location = useLocation()

  // при монтировании устанавливаем заголовок в заисимости от location

  useEffect(() => {
    switch (location.pathname) {
      case '/': 
        document.title = 'RentalCar | Home'
        break
      case '/catalog':
        document.title = 'RentalCar | Catalog'
        break
      default:
        if (location.pathname.startsWith('/cars/')) {
          document.title = 'RentalCar | Details'
        }
        else {
          document.title = 'RentalCar'
        }
        break
        }
    }, [location.pathname])

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/catalog' element={<CatalogPage />} />
      <Route path='/cars/:id' element={<DetailsPage/> } />
    </Routes>
  )
}

export default App
