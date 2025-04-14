import s from './CarFeaturesList.module.css'

const CarFeaturesList = ({ car }) => {
    
    const [city, country] = car.address.split(', ').slice(-2)

    const newMileage = car.mileage.toLocaleString('fr-FR')

    const formatCapitalized = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()

    const svgIcon = '/symbol-defs.svg'

    
 }

export default CarFeaturesList