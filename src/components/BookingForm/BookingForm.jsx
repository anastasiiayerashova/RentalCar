import s from './BookingForm.module.css'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useId } from 'react';
import * as Yup from 'yup';
import { schema } from '../../constants/index.js';

const BookingForm = () => {

    const nameId = useId()
    const emailId = useId()
    const msgId = useId()

        const {
        register,
        handleSubmit,
        reset,
        trigger,
        getValues,
        watch,
        formState: {errors}
    } = useForm({
        resolver: yupResolver(schema()),
        values: { name: '', email: '', message: '' },
        mode: 'onChange',
        reValidateMode: 'onChange'
    })

    const onSubmit = (values) => {
        reset()
    }

    return (
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
                    <label htmlFor={msgId} className={s.visually_hidden}>Message</label>
                    <textarea rows='5' cols='30' id={msgId} type='text' {...register('message')} placeholder='Comment' />
                    {errors.message && <p className={s.error}>{errors.message.message}</p>}
                </div>
                
            </form>
        </div>
    )
 }

export default BookingForm