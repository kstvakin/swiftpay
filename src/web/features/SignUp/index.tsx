import React, { useEffect, useState } from 'react';
import '../../styles/inner-page.css';
import { AppStyleSheet } from '../../utils/inteface';
import { Form, FormButton, FormInput, FormSelect, FormTextArea } from '../../components/Form';
import * as Countries from '../../data/countries.json';
import * as Languages from '../../data/languages.json';
import z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from 'react-hook-form';
import { TextComponent } from '../../components/Text';
import Box from '../../components/Box';
import { Link } from 'react-router-dom';
import { findFlagUrlByNationality } from 'country-flags-svg';


const styleSheet: AppStyleSheet = {
    'inputStyle': 'placeholder:text-[1.5625rem] focus:outline-none focus:border-input px-2 w-full h-[5.875rem] placeholder:text-[#C4C4C4] bg-input border border-input-border rounded-[0.625rem]',
    'selectStyle': 'text-[#C4C4C4] text-[1.5625rem] custom-select'
}

const signUpSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters long"),
    email: z.string().email("Invalid email address"),
    dob: z.date().max(new Date(), "You must be at least 18 years old"),
    language: z.string().min(1, {
        message: "Please select a language",
    }),
    country: z.string().min(1, {
        message: "Please select a country",
    }),
    address: z.string().min(2, "Name must be at least 2 characters long"),
    phoneNumber: z.string().min(11, "Phone number must be at least 11 characters long"),
});

export type FormValues = {
    name: string;
    email: string;
    language: string;
    dob: Date;
    country: string;
    address: string;
    phooneNumber: string;
    flag: string;
};

const SignUpForm = (): React.JSX.Element => {
    const [userFlag, setUserFlag] = useState('us');
    const countries = Countries.data;
    const languages = Languages.data;

    useEffect(() => {
        console.log(userFlag)
    }, [userFlag])

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            country: 'us',
            flag: '+1'
        },
    });

    const onSubmit: SubmitHandler<FormValues> = (data: Record<string, any>) => {
        console.log("Form Data:", data);
    };

    const flagUrl = `../../assets/images/country/${userFlag}.svg`;



    return (

        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormInput
                name='name'
                placeholder='Full name'
                className={styleSheet.inputStyle}
                type='text'
                register={register}
                error={errors.name?.message} />

            <FormInput name='email'
                placeholder='Email address'
                className={styleSheet.inputStyle}
                type='text'
                register={register}
                error={errors.email?.message} />

            <FormInput name='dob'
                placeholder='Date of Birth'
                className={styleSheet.inputStyle}
                type='text'
                register={register}
                error={errors.dob?.message} />

            <FormSelect name='language'
                className={`${styleSheet.selectStyle} ${styleSheet.inputStyle}`}
                register={register}
                error={errors.language?.message}>
                <option value="">Language of preference</option>
                {languages.map((item) => (
                    <option value={item} key={item}>{item}</option>
                ))}
            </FormSelect>

            <FormSelect name='country'
                className={`${styleSheet.selectStyle} ${styleSheet.inputStyle}`}
                register={register}
                error={errors.country?.message}
                onChange={(e: any) => setUserFlag(e.target.value)}>
                <option defaultValue="us">Country</option>
                {countries.map((item) => (
                    <option value={item.code} key={item.name}>{item.name}</option>
                ))}
            </FormSelect>

            <Box className='flex'>
                <Box className='w-[25%] relative'>
                    <label className='absolute top-[25%] left-4'>
                        <img src={flagUrl}
                            className='w-[40px] h-[40px]' /></label>
                    <FormSelect name='flag'
                        className={`${styleSheet.selectStyle} ${styleSheet.inputStyle} border-r-0`}
                        register={register}
                        error={errors.flag?.message}>
                        {countries.map((item) => (
                            <option value={item.dialCode} key={item.dialCode}></option>
                        ))}
                    </FormSelect>
                </Box>
                <Box className='w-[75%]'>
                    <FormInput name='phoneNumber'
                        placeholder='Phone number'
                        className={`${styleSheet.inputStyle} border-l-0`}
                        type='text'
                        register={register}
                        error={errors.phooneNumber?.message} />
                </Box>
            </Box>

            <FormTextArea
                className={`${styleSheet.inputStyle} pt-5 text-[#9ca3af] h-[150px]`}
                register={register}
                error={errors.address?.message}
                name='address'
                placeholder='Address'></FormTextArea>

            <FormButton title='Continue'
                className='bg-button color-white py-[0.9375rem] px-[7.8125rem] rounded-full'

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
                        Already have an account? <Link className='text-button font-extrabold' to='/sign-in'>Login</Link>
                    </TextComponent>
                </Box>
            </Box>
        </Form>
    )
}

export default SignUpForm;