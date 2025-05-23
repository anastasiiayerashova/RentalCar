import { FormControl, MenuItem, Select } from '@mui/material';
import { selectCarBrands } from '../../redux/brands/slice.js';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCarBrands } from '../../redux/brands/operations.js';
import { setFilters } from '../../redux/filters/slice.js';
import { useSearchParams } from 'react-router-dom';
import { prices } from '../../constants/index.js';
import s from './Filters.module.css'
import { NumericFormat } from 'react-number-format';
import CustomArrowIcon from '../CustomIcons/ArrowIcon/ArrowIcon.jsx';
import { clearItems, resetPage } from '../../redux/cars/slice.js';
import { menuItemSx, formControlSx, menuPropsSx, menuPricePropsSx } from '../../styles/muiStyles.js';
import { motion } from 'framer-motion';

const Filters = () => {
    const carBrands = useSelector(selectCarBrands)
    const [isReady, setIsReady] = useState(false)

    const dispatch = useDispatch()
    const [searchParams, setSearchParams] = useSearchParams()

    const [formData, setFormData] = useState({
        brand: searchParams.get('brand') || '',
        price: searchParams.get('price') || '',
        mileageFrom: searchParams.get('mileageFrom') || '',
        mileageTo: searchParams.get('mileageTo') || ''
    })

    useEffect(() => {
        dispatch(getCarBrands()).then(() => setIsReady(true))
    }, [dispatch])


    const handleSubmit = (e) => {

        e.preventDefault()

        dispatch(clearItems())
        dispatch(resetPage())
        dispatch(setFilters(formData))

        // фильтруем formData чтобы исключить в url пустые поля

        const filteredData = Object.fromEntries(                                                       
            Object.entries(formData).filter(([_, value]) => value)
        )
        
        setSearchParams(filteredData)
    }

    const handleChangeData = (e) => {
        const { name, value } = e.target
        
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <motion.div className={s.filters} initial={{ opacity: 0 }} animate={{ opacity: isReady ? 1 : 0 }} transition={{ duration: 0.7 }}>
            <form className={s.form} onSubmit={handleSubmit}>

                {/* brands */}

                   <div className={s.block}>
                        <label className={s.label} htmlFor='brand'>Car brand</label>
                        <FormControl fullWidth sx={formControlSx}>
                            <Select
                                displayEmpty={true}
                                name="brand"
                                id="brand"
                                renderValue={(selected) => selected || 'Choose a brand'}
                                value={formData.brand}
                                onChange={handleChangeData}
                                IconComponent={CustomArrowIcon}
                                MenuProps={menuPropsSx}>
                            
                                    <MenuItem value='' sx={menuItemSx}>
                                       Clear filter
                                    </MenuItem>
                             
                                {carBrands.map((brand) => (
                                    <MenuItem key={brand} value={brand} sx={menuItemSx}>
                                       {brand}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                </div>
                
                {/* price */}
                
                    <div className={s.block}>
                        <label className={s.label} htmlFor='price'>Price/ 1 hour</label>
                        <FormControl fullWidth sx={formControlSx}>
                            <Select
                                displayEmpty={true}
                                name="price"
                                id="price"
                                renderValue={(selected) => (selected ? `To $${selected}` : 'Choose a price')}
                                value={formData.price}
                                onChange={handleChangeData}
                                IconComponent={CustomArrowIcon}
                                MenuProps={menuPricePropsSx}>
                            
                                    <MenuItem  value='' sx={menuItemSx}>
                                        Clear filter
                                    </MenuItem>
                            
                                {prices.map((price) => (
                                    <MenuItem key={price} value={price} sx={menuItemSx}>
                                        {price}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                    
                {/* mileage */}
                
                <div className={s.block}>
                    <label className={s.label} htmlFor='mileageFrom'>Car mileage / km</label>
                    <div className={s.container}>
                    <div className={s.mileage_wrap}>
                        <NumericFormat
                            className={`${s.input} ${s.input_left}`}
                            value={formData.mileageFrom}
                            onValueChange={({value}) => setFormData((prev) => ({...prev, mileageFrom: value}))}
                            allowNegative={false}
                            autoComplete='off'
                            thousandSeparator=','
                            placeholder='From'
                            name='mileageFrom'
                            id='mileageFrom'
                            prefix='From '
                            suffix=' km'
                        />
                    </div>
                    <div className={s.mileage_wrap}>
                        <NumericFormat
                            className={`${s.input} ${s.input_right}`}
                            value={formData.mileageTo}
                            onValueChange={({value}) => setFormData((prev) => ({...prev, mileageTo: value}))}
                            allowNegative={false}
                            autoComplete='off'
                            thousandSeparator=','
                            placeholder='To'
                            prefix='To '
                            suffix=' km'
                            name='mileageTo'
                            id='mileageTo'
                        />
                    </div>
                </div>
                </div>
                <button type='submit' className={s.btn}>Search</button>
            </form>
        </motion.div>
    )
 }

export default Filters