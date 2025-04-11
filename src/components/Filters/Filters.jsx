import { FormControl, MenuItem, OutlinedInput, Select } from '@mui/material';
import { selectCarBrands } from '../../redux/brands/slice.js';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCarBrands } from '../../redux/brands/operations.js';
import { setFilters } from '../../redux/filters/slice.js';
import { useSearchParams } from 'react-router-dom';
import { prices } from '../../constants/index.js';
import s from './Filters.module.css'
import { NumericFormat } from 'react-number-format';
import CustomArrowIcon from '../ArrowIcon/ArrowIcon.jsx';
import { clearItems, resetPage } from '../../redux/cars/slice.js';

const Filters = () => {
    const carBrands = useSelector(selectCarBrands)

    const dispatch = useDispatch()
    const [searchParams, setSearchParams] = useSearchParams()

    const [formData, setFormData] = useState({
        brand: searchParams.get('brand') || '',
        price: searchParams.get('price') || '',
        mileageFrom: searchParams.get('mileageFrom') || '',
        mileageTo: searchParams.get('mileageTo') || ''
    })

    useEffect(() => {
        dispatch(getCarBrands())
    }, [dispatch])


    const handleSubmit = (e) => {

        e.preventDefault()
        
        dispatch(clearItems())
        dispatch(resetPage())
        dispatch(setFilters(formData))

        const filteredData = {}

        if (formData.brand) filteredData.brand = formData.brand
        if (formData.price) filteredData.price = formData.price
        if (formData.mileageFrom) filteredData.mileageFrom = formData.mileageFrom
        if (formData.mileageTo) filteredData.mileageTo = formData.mileageTo
        
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
        <section className={s.filters}>
            <form className={s.form} onSubmit={handleSubmit}>

                {/* brands */}

                    <div className={s.block}>
                        <label className={s.label} htmlFor='brand'>Car brand</label>
                    <FormControl
                        fullWidth
                        sx={{
                            backgroundColor: 'var(--inputs)',
                            maxWidth: '204px',
                            borderRadius: '12px',
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '12px',
                                fontFamily: 'Manrope', 
                                fontWeight: '500',
                                fontSize: '16px',
                                lineHeight: 1.25,
                                color: 'var(--main)',
                                padding: 0,
                                boxShadow: 'none',
                                '& fieldset': {
                                    border: 'none'
                                }
                            }
                        }}
                    >
                            <Select displayEmpty
                                name='brand'
                                id='brand'
                                input={<OutlinedInput notched={false} />}
                                renderValue={selected => selected || 'Choose a brand'}
                                value={formData.brand}
                                onChange={handleChangeData}
                                IconComponent={CustomArrowIcon}
                                MenuProps={{
                                   PaperProps: {
                                    sx: {
                                        borderRadius: '12px',
                                        border: '1px solid var(--inputs)',
                                        boxShadow: '0 4px 36px 0 rgba(0, 0, 0, 0.02)'
                                    }
                                }
                            }}
                        >
                                   <MenuItem 
                                        value=''
                                        sx={{
                                           
                                            padding: 0,
                                            '&:hover': {
                                                    backgroundColor: 'transparent'
                                                },
                                            '&.Mui-selected': {
                                                backgroundColor: 'transparent',
                                                color: 'var(--main)',
                                                '&:hover': {
                                                    backgroundColor: 'transparent'
                                                }
                                            }
                                        }}
                                    >
                                        Clear filter
                                    </MenuItem>
                                {carBrands.map((brand) => (
                                    <MenuItem
                                        key={brand}
                                        value={brand}
                                        sx={{
                                            padding: 0,
                                            '&:hover': {
                                                    backgroundColor: 'transparent'
                                                },
                                            '&.Mui-selected': {
                                                backgroundColor: 'transparent',
                                                color: 'var(--main)',
                                                '&:hover': {
                                                    backgroundColor: 'transparent'
                                                }
                                            }
                                        }}
                                    >
                                        {brand}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                </div>
                
                {/* price */}
                
                    <div className={s.block}>
                        <label className={s.label} htmlFor='price'>Price/ 1 hour</label>
                    <FormControl
                        fullWidth
                        sx={{
                            backgroundColor: 'var(--inputs)',
                            maxWidth: '204px',
                            borderRadius: '12px',
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '12px',
                                fontFamily: 'Manrope', 
                                fontWeight: '500',
                                fontSize: '16px',
                                lineHeight: 1.25,
                                color: 'var(--main)',
                                padding: 0,
                                boxShadow: 'none',
                                '& fieldset': {
                                    border: 'none'
                                }
                            }
                        }}
                    >
                            <Select displayEmpty
                                name='price'
                                id='price'
                                input={<OutlinedInput notched={false} />}
                                renderValue={(selected) => (selected ? `To $${selected}` : 'Choose a price')}
                                value={formData.price}
                                onChange={handleChangeData}
                                IconComponent={CustomArrowIcon}
                                MenuProps={{
                                   PaperProps: {
                                        sx: {
                                        maxHeight: '160px',
                                        borderRadius: '12px',
                                        border: '1px solid var(--inputs)',
                                        boxShadow: '0 4px 36px 0 rgba(0, 0, 0, 0.02)'
                                    }
                                }
                            }}
                        >
                                    <MenuItem 
                                        value=''
                                        sx={{
                                           
                                            padding: 0,
                                            '&:hover': {
                                                    backgroundColor: 'transparent'
                                                },
                                            '&.Mui-selected': {
                                                backgroundColor: 'transparent',
                                                color: 'var(--main)',
                                                '&:hover': {
                                                    backgroundColor: 'transparent'
                                                }
                                            }
                                        }}
                                    >
                                        Clear filter
                                    </MenuItem>
                                {prices.map((price) => (
                                    <MenuItem
                                        key={price}
                                        value={price}
                                        sx={{
                                            padding: 0,
                                            '&:hover': {
                                                    backgroundColor: 'transparent'
                                                },
                                            '&.Mui-selected': {
                                                backgroundColor: 'transparent',
                                                color: 'var(--main)',
                                                '&:hover': {
                                                    backgroundColor: 'transparent'
                                                }
                                            }
                                        }}
                                    >
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
                            value={formData.mileageFrom}
                            onValueChange={({value}) => setFormData((prev) => ({...prev, mileageFrom: value}))}
                            allowNegative={false}
                            autoComplete='off'
                            thousandSeparator=','
                            placeholder='From'
                            name='mileageFrom'
                            id='mileageFrom'
                            prefix='From '
                            className={`${s.input} ${s.input_left}`}
                        />
                    </div>
                    <div className={s.mileage_wrap}>
                        <NumericFormat
                            value={formData.mileageTo}
                            onValueChange={({value}) => setFormData((prev) => ({...prev, mileageTo: value}))}
                            allowNegative={false}
                            autoComplete='off'
                            thousandSeparator=','
                            placeholder='To'
                            prefix='To '
                            name='mileageTo'
                            id='mileageTo'
                            className={`${s.input} ${s.input_right}`}
                        
                        />
                    </div>
                </div>
                </div>
                <button type='submit' className={s.btn}>Search</button>
            </form>
        </section>
    )
 }

export default Filters