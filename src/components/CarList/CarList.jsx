import s from './CarList.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { selectCars, selectCurrentPage, selectTotalPages, selectLoading } from '../../redux/cars/slice.js'
import { useState, useEffect } from 'react'
import { getCars } from '../../redux/cars/operations.js'
import { useSearchParams } from 'react-router-dom'
import { setFilters } from '../../redux/filters/slice.js'
import { selectFilters } from '../../redux/filters/selectors.js'
import { setCurrentPage } from '../../redux/cars/slice.js'
import CarItem from '../CarItem/CarItem.jsx'
import Loader from '../Loader/Loader.jsx'
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const CarList = () => {
    const filters = useSelector(selectFilters)
    const cars = useSelector(selectCars)
    const currentPage = useSelector(selectCurrentPage)
    const totalPages = useSelector(selectTotalPages)
    const loading = useSelector(selectLoading)

    const dispatch = useDispatch()
    const [searchParams] = useSearchParams()

    const [isLoading, setIsLoading] = useState(true)
    const [filtersOn, setFiltersOn] = useState(false)
    const [openSnackbar, setOpenSnackbar] = useState(false);

    useEffect(() => {

        const newFilters = {
            brand: searchParams.get('brand') || '',
            price: searchParams.get('price') || '',
            mileageFrom: searchParams.get('mileageFrom') || '',
            mileageTo: searchParams.get('mileageTo') || ''
        }

            dispatch(setFilters(newFilters))
            setFiltersOn(true)

    }, [searchParams, dispatch])


    useEffect(() => {

        if (filtersOn) {

            dispatch(getCars(filters)).finally(() => {
                setIsLoading(false)
            })
        }

    }, [dispatch, filters, currentPage, filtersOn])


    const handleClick = () => {
        if (currentPage < totalPages) {
            if (totalPages - currentPage === 1) {
                console.log('no cars more')
                setOpenSnackbar(true)
                
         
            }
            dispatch(setCurrentPage())
        }
    }

    const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

    return (
        <>
           {isLoading ? (
        <Loader />
    ) : (
        <section className={s.car_section}>
            
                <ul className={s.list}>
                    {cars.map((car) => (
                        <CarItem key={car.id} data={car} />
                    ))}
                </ul>

            {currentPage < totalPages && (loading ? (<Loader/>) : ((
                <button
                    type="button"
                    onClick={handleClick}
                    className={s.btn}
                >
                    Load more
                </button>
            )))  }
        </section>
            )}
            <Snackbar
              open={openSnackbar}
              autoHideDuration={5000}
              onClose={handleSnackbarClose}
              anchorOrigin={{ vertical: 'top', horizontal: 'center' }} 
              sx={{
                   width: '90%', 
                   height: '50px', 
                   marginTop: '10px',
                }}
            >
                <Alert
                    onClose={handleSnackbarClose}
                    severity="info"
                    variant="filled"
                    sx={{
                        width: '100%', height: '100%',
                        fontFamily: 'Manrope',
                        fontSize: '16px',
                        lineHeight: 1.25,
                        fontWeight: 400,
                        borderRadius: '14px',
                        backgroundColor: 'var(--badges)',
                        color: 'var(--main)',
                        border: '1px solid var(--main)'
                    }}>
                      All cars are loaded
                </Alert>
            </Snackbar>
        </>
    )
 }

export default CarList