import s from './DetailsPage.module.css'
import { useParams } from 'react-router-dom'
import { selectCars } from '../../redux/cars/slice.js'
import { useSelector } from 'react-redux'
import BookingForm from '../../components/BookingForm/BookingForm.jsx'

const DetailsPage = () => {
    const { id } = useParams()
    
    const cars = useSelector(selectCars)

    const car = cars.find(car => car.id === id)

    return (
        <section className={s.details}>
            <div className={s.main}>
                <div className={s.first_wrap}>
                    <img src={car.img} alt={car.description} className={s.image} />
                    <BookingForm/>
                </div>
                <div className={s.second_wrap}></div>
            </div>
        </section>
    )
 }

export default DetailsPage