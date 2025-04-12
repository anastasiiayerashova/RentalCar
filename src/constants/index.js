import * as Yup from 'yup';

export const prices = [30, 40, 50, 60, 70, 80]

export  const schema = () => {
    return Yup.object().shape({
        name: Yup.string()
            .required('Name is required')
            .matches(/^[а-яА-ЯёЁЇїІіЄєҐґa-zA-Z\s]+$/, 'Name should contain only letters'),
        email: Yup.string()
            .required('Email is required')
            .email('Email must be valid')
            .matches(/^[a-zA-Z0-9._%+-]+@(gmail\.com|meta\.ua|ukr\.net)$/i, 'Enter a valid email'),
        message: Yup.string()
            .required('Message is required')
            .min(5, 'Message should contain at least 5 characters')
            .max(30, 'Message cannot exceed 30 characters')
    })
    }