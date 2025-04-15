import { Routes, Route } from 'react-router-dom'
import { lazy } from 'react';
import './App.css'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import SharedLayout from './SharedLayout.jsx'

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('../pages/CatalogPage/CatalogPage'));
const DetailsPage = lazy(() => import('../pages/DetailsPage/DetailsPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

function App() {

  const location = useLocation()

  // при монтировании устанавливаем заголовок в зависимости от location

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
    <SharedLayout>
       <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/catalog' element={<CatalogPage />} />
          <Route path='/cars/:id' element={<DetailsPage />} />
          <Route path='*' element={<NotFoundPage/> } />
       </Routes>
    </SharedLayout>
  )
}

export default App
