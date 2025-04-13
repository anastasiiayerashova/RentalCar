import Button from '../Button/Button.jsx'
import { useLocation, Link } from 'react-router-dom'
import s from './CarItem.module.css'

const CarItem = ({ data }) => {

    const { img, brand, model, rentalPrice, address, rentalCompany, type, mileage, description, year, id } = data

    const [city, country] = address.split(', ').slice(-2)

    const newMileage = mileage.toLocaleString('fr-FR')

    const formatCapitalized = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()

    const location = useLocation()
    
    return (
        <li className={s.item}>
            <div className={s.img_wrapper}>
                <img src={img} className={s.picture} width="276" height="268" alt={description} />
            </div>
            <div className={s.first_wrap}>
                <p className={s.title}>
                    <span>{formatCapitalized(brand)}</span>
                    <span className={s.model}>{model},</span>
                    <span>{year}</span>
                </p>
                <p>{`$${rentalPrice}`}</p>
            </div>
            
            <div className={s.second_wrap}>
                <p className={s.item_second}>{city }</p>
                <p className={s.item_second}>{country }</p>
                <p className={s.item_second}>{rentalCompany}</p>
            </div>
            <div className={s.second_wrap}>
                <p className={s.item_second}>{formatCapitalized(type)}</p>
                <p className={s.item_second}>{`${newMileage} km`}</p>
            </div>
            
            <Button text='Read more' to={`/cars/${id.toString()}`} state={location} className={s.btn} />
        </li>
    )
 }

export default CarItem