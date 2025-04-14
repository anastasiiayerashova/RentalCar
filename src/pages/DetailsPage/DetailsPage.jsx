import s from './DetailsPage.module.css'
import { useParams } from 'react-router-dom'
import { selectCars } from '../../redux/cars/slice.js'
import { useSelector, useDispatch } from 'react-redux'
import BookingForm from '../../components/BookingForm/BookingForm.jsx'
import Header from '../../components/Header/Header.jsx'
import { useEffect } from 'react'
import { getCars } from '../../redux/cars/operations.js'
import Loader from '../../components/Loader/Loader.jsx'
import { toggleFavourite, selectFavourites } from '../../redux/favourite/slice.js'
import FavouriteButton from '../../components/FavouriteButton/FavouriteButton.jsx'
import CarFeaturesList from '../../components/CarFeaturesList/CarFeaturesList.jsx'

const DetailsPage = () => {

    const { id } = useParams()
    const dispatch = useDispatch()
    
    const cars = useSelector(selectCars)
    const favourites = useSelector(selectFavourites)


    useEffect(() => {
        if (cars.length === 0) {
            dispatch(getCars())
        }
    }, [cars, dispatch])


    const car = cars.find(car => car.id === id)

    if (!car) {
       return (
           <>
              <Header />
              <Loader/>
           </>
        )
    }

    const isFavourite = favourites.some(item => item.id === car.id)

    const handleToggleFavourite = () => {
        dispatch(toggleFavourite(car))
    }

    const [city, country] = car.address.split(', ').slice(-2)

    const newMileage = car.mileage.toLocaleString('fr-FR')

    const formatCapitalized = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()

    const svgIcon = '/symbol-defs.svg'

    return (
        <>
        {/* <Header/> */}
        <section className={s.details}>
            <div className={s.main}>
                <div className={s.first_wrap}>
                    <div className={s.img_wrapper}>
                        <FavouriteButton isFavourite={isFavourite} onClick={handleToggleFavourite}/>
                        <img src={car.img} alt={car.description} className={s.image} />
                    </div>
                    <BookingForm/>
                </div>
                <CarFeaturesList car={car} />
            </div>
        </section>
    </>
    )
 }

export default DetailsPage