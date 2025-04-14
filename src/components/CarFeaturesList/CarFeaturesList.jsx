import s from './CarFeaturesList.module.css'

const CarFeaturesList = ({ car }) => {
    
    const [city, country] = car.address.split(', ').slice(-2)

    const newMileage = car.mileage.toLocaleString('fr-FR')

    const formatCapitalized = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()

    const svgIcon = '/symbol-defs.svg'
    
    return (
        <div className={s.second_wrap}>
                    <div className={s.title_wrap}>
                        <div className={s.title_main}>
                            <div className={s.title_first}>
                                <p className={s.title}>
                                    <span>{formatCapitalized(car.brand)}</span>
                                    <span>{car.model},</span>
                                    <span>{car.year}</span>
                                </p>
                                <p className={s.id}>{`Id: ${car.id.slice(0,4)}`}</p>
                            </div>
                            <div className={s.city_main}>
                                <p className={s.icon_city}>
                                    <svg width={16} height={16}>
                                      <use href={`${svgIcon}#icon-Location`} />
                                    </svg>
                                    <span>{`${city}, ${country}` }</span>
                                </p>
                                <p className={s.icon_city}>{`Mileage: ${newMileage} km` }</p>
                            </div>
                        </div>
                        <p className={s.rental}>{`$${car.rentalPrice}`}</p>
                        <p className={s.descr}>{car.description }</p>
                    </div>
                    <div className={s.list_wrap}>
                        <div className={s.list_main}>
                            <p className={s.list_title}>Rental Conditions: </p>
                            <ul className={s.features_list}>
                                {car.rentalConditions.map((condition, index) => (
                                    <li key={index}>
                                      <svg width={16} height={16}>
                                         <use href={`${svgIcon}#icon-check`} />
                                      </svg> 
                                        <p>{condition }</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={s.list_main}>
                            <p className={s.list_title}>Car Specifications: </p>
                            <ul className={s.features_list}>
                                <li>
                                    <svg width={16} height={16}>
                                        <use href={`${svgIcon}#icon-calendar`} />
                                    </svg> 
                                    <p>{`Year: ${car.year}` }</p>
                                </li>
                                <li>
                                    <svg width={16} height={16}>
                                        <use href={`${svgIcon}#icon-car`} />
                                    </svg> 
                                    <p>{`Type: ${formatCapitalized(car.type)}` }</p>
                                </li>
                                <li>
                                    <svg width={16} height={16}>
                                        <use href={`${svgIcon}#icon-oil`} />
                                    </svg> 
                                    <p>{`Fuel Consumption: ${car.fuelConsumption}` }</p>
                                </li>
                                <li>
                                    <svg width={16} height={16}>
                                        <use href={`${svgIcon}#icon-circle1`} />
                                    </svg> 
                                    <p>{`Engine Size: ${car.engineSize}` }</p>
                                </li>
                            </ul>
                        </div>
                        <div className={s.list_main}>
                            <p className={s.list_title}>Accessories and functionalities: </p>
                            <ul className={s.features_list}>
                                {[...car.accessories, ...car.functionalities].map((item, index) => (
                                    <li key={index}>
                                        <svg width={16} height={16}>
                                          <use href={`${svgIcon}#icon-check`} />
                                        </svg> 
                                        <p>{item }</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
    )
 }

export default CarFeaturesList