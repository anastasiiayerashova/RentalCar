import s from './BookingForm.module.css'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useId, useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { schema } from '../../constants/index.js';
import Calendar from '../DatePicker/DatePicker.jsx';
import dayjs from 'dayjs';

const BookingForm = () => {

    const [openSnackbar, setOpenSnackbar] = useState(false)

    const nameId = useId()
    const emailId = useId()
    const msgId = useId()

        const {
        register,
        handleSubmit,
        setValue,
        reset,
        trigger,
        getValues,
        watch,
        formState: {errors}
    } = useForm({
        resolver: yupResolver(schema()),
        values: { name: '', email: '', message: '', date: '' },
        mode: 'onChange',
        reValidateMode: 'onChange'
    })

    const onSubmit = (values) => {
        
console.log('Form is valid, submitting:', values);
        setOpenSnackbar(true)
        reset()
    }

    const handleSnackbarClose = (event, reason) => {
       if (reason === 'clickaway') {
         return;
       }
       setOpenSnackbar(false);
    };

    return (
        <>
        <div className={s.container}>
            <p className={s.title}>Book your car now</p>
            <p className={s.text}>Stay connected! We are always ready to help you.</p>
            <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={s.input_group}>
                    <label htmlFor={nameId} className={s.visually_hidden}>Name</label>
                    <input id={nameId} type='text' {...register('name')} placeholder='Name*' />
                    {errors.name && <p className={s.error}>{errors.name.message}</p>}
                </div>
                <div className={s.input_group}>
                    <label htmlFor={emailId} className={s.visually_hidden}>Name</label>
                    <input id={emailId} type='text' {...register('email')} placeholder='Email*' />
                    {errors.email && <p className={s.error}>{errors.email.message}</p>}
                </div>
                <div className={s.input_group}>
                        <Calendar value={watch('date') ? dayjs(watch('date')) : null} onChange={(value) => {
                            setValue('date', value?.format('YYYY-MM-DD') || '')
                            trigger('date')
                        }} />
                        {errors.date && <p className={s.error}>{errors.date.message}</p>}
                </div>
                <div className={s.input_group}>
                    <label htmlFor={msgId} className={s.visually_hidden}>Message</label>
                    <textarea rows='5' cols='30' id={msgId} type='text' {...register('message')} placeholder='Comment' />
                    {errors.message && <p className={s.error}>{errors.message.message}</p>}
                </div>
                <button type='submit' className={s.send_btn}>Send</button>
            </form>
            </div>
             <Snackbar
                open={openSnackbar}
                autoHideDuration={5000}
                onClose={handleSnackbarClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }} 
                sx={{
                    width: '100%', 
                    height: '50px', 
                    marginTop: '10px',
                }}
            >
                <Alert
                    onClose={handleSnackbarClose}
                    severity="success"
                    variant="filled"
                    sx={{
                    width: '100%', height: '100%',
                    fontFamily: 'Manrope',
                    fontSize: '16px',
                    lineHeight: 1.25,
                    fontWeight: 400,
                    borderRadius: '14px',
                    backgroundColor: '#A5D6A7',
                    color: 'var(--white)',
                    border: 'none'
                    }}>
                        Booking successfully submitted!
                </Alert>
            </Snackbar>
     </>
    )
 }

export default BookingForm