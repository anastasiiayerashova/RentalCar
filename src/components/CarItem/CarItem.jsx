import Button from '../Button/Button.jsx'
import { useLocation } from 'react-router-dom'
import s from './CarItem.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { toggleFavourite, selectFavourites } from '../../redux/favourite/slice.js'
import FavouriteButton from '../FavouriteButton/FavouriteButton.jsx'

const CarItem = ({ data }) => {

    const { img, brand, model, rentalPrice, address, rentalCompany, type, mileage, description, year, id } = data

    const [city, country] = address.split(', ').slice(-2)

    const newMileage = mileage.toLocaleString('fr-FR')

    const formatCapitalized = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()

    const location = useLocation()
    const dispatch = useDispatch()

    const favourites = useSelector(selectFavourites)
    const isFavourite = favourites.some(item => item.id === id)

    const handleToggleFavourite = () => {
        dispatch(toggleFavourite(data))
    }
    
    return (
        <li className={s.item}>
            <div className={s.img_wrapper}>
                <FavouriteButton isFavourite={isFavourite} onClick={handleToggleFavourite}/>
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