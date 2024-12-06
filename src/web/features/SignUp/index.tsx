import React, { useEffect, useState } from 'react';
import '../../styles/inner-page.css';
import { AppStyleSheet } from '../../utils/inteface';
import { Form, FormButton, FormInput, FormSelect, FormTextArea } from '../../components/Form';
import * as Countries from '../../data/countries.json';
import * as Languages from '../../data/languages.json';
import z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';
import { TextComponent } from '../../components/Text';
import Box from '../../components/Box';
import { Link } from 'react-router-dom';


const styleSheet: AppStyleSheet = {
    'inputStyle': 'focus:outline-none focus:border-input px-2 w-full h-[5.875rem] placeholder:text-[#9ca3af] bg-input border border-input rounded-[0.625rem]',
    'selectStyle': 'text-[#9ca3af] custom-select'
}

const signUpSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters long"),
    email: z.string().email("Invalid email address"),
    dob: z.date().max(new Date(), "You must be at least 18 years old"),
    language: z.string().email("Invalid email address"),
    country: z.number().min(18, "You must be at least 18 years old"),
    address: z.string().min(2, "Name must be at least 2 characters long"),
});

const SignUpForm = (): React.JSX.Element => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [dob, setDob] = useState<string>('');
    const [language, setLanguage] = useState<string>('');
    const [country, setCountry] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const countries = Countries.data;
    const languages = Languages.data;

    // useEffect(() => {
    //     console.log(name)
    // }, [name])

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(signUpSchema),
    });

    const onSubmit = (data: Record<string, any>) => {
        console.log("Form Data:", data);
    };

    const handleChange = (event: {
        target: {
            name: string;
            value: React.SetStateAction<string>;
        };
    }) => {
        switch (event.target.name) {
            case 'name':
                setName(event.target.value);
                break;
            case 'email':
                setEmail(event.target.value);
                break;
            case 'dob':
                setDob(event.target.value);
                break;
            case 'language':
                setLanguage(event.target.value);
                break;
            case 'country':
                setCountry(event.target.value);
                break;
            case 'address':
                setAddress(event.target.value);
                break;
            default:
                return;
        }
    };

    return (

        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormInput
                name={name}
                placeholder='Full name'
                className={styleSheet.inputStyle}
                type='text'
                register={register} />

            <FormInput name='email'
                placeholder='Email address'
                className={styleSheet.inputStyle}
                type='text'
                value={email}
                onChange={handleChange} />

            <FormInput name='dob'
                placeholder='Date of Birth'
                className={styleSheet.inputStyle}
                type='text'
                value={dob}
                onChange={handleChange} />

            <FormSelect name='language'
                className={`${styleSheet.selectStyle} ${styleSheet.inputStyle}`}
                value={language}
                onChange={handleChange}>
                <option defaultValue="">Language of preference</option>
                {languages.map((item) => (
                    <option value={item} key={item}>{item}</option>
                ))}
            </FormSelect>

            <FormSelect name='country'
                className={`${styleSheet.selectStyle} ${styleSheet.inputStyle}`}
                value={country}
                onChange={handleChange}>
                <option defaultValue="">Country</option>
                {countries.map((item) => (
                    <option value={item} key={item}>{item}</option>
                ))}
            </FormSelect>

            <FormTextArea
                className={`${styleSheet.inputStyle} pt-5 text-[#9ca3af]`}
                value={address}
                onChange={handleChange}
                name='address'
                placeholder='Address'></FormTextArea>

            <FormButton title='Continue'
                className='bg-button color-white py-[0.9375rem] px-[7.8125rem] rounded-full'
                onClick={() => console.log('hello')}
                type='submit'
            ></FormButton>

            <Box className='flex justify-center'>
                <Box className='w-[80%]'>
                    <TextComponent className='text-[1.125rem] text-center'>
                        By continuing, you accept our <Link className='text-button font-extrabold' to='/terms'>Terms and Condition and Privacy Policy</Link>
                    </TextComponent>
                </Box>
            </Box>

            <Box className='flex justify-center mt-5'>
                <Box className='w-[80%]'>
                    <TextComponent className='text-[1.25rem] text-center color-[#ccc]'>
                        ALready have an account? <Link className='text-button font-extrabold' to='/sign-in'>Login</Link>
                    </TextComponent>
                </Box>
            </Box>
        </Form>
    )
}

export default SignUpForm;