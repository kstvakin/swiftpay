import React, { useState } from 'react';
import '../../styles/inner-page.css';
import { AppStyleSheet } from '../../utils/inteface';
import { Form, FormButton, FormDatePicker, FormInput, FormSelect, FormTextArea } from '../../components/Form';
import * as Countries from '../../data/countries.json';
import * as Languages from '../../data/languages.json';
import z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from 'react-hook-form';
import { TextComponent } from '../../components/Text';
import Box from '../../components/Box';
import { Link } from 'react-router-dom';
import ProgressBar from '../../components/ProgressBar';
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from '../../store/store';
import { increment } from './signUpSlice';


const styleSheet: AppStyleSheet = {
    'inputStyle': `w-full placeholder:text-[1.2625rem] md:placeholder:text-[1.5625rem] focus:text-[#C4C4C4] 
        focus:bg-input focus:outline-none focus:border-input px-2 w-full h-[5.875rem] 
        placeholder:text-[#C4C4C4] !text-[#C4C4C4] text-[1.5625rem] bg-input border
        border-input-border rounded-[0.625rem]`,
    'selectStyle': 'text-[#C4C4C4] text-[1.2625rem] md:text-[1.5625rem] custom-select',
    'button': 'bg-[#4F914A] color-white py-[0.9375rem] px-[7.8125rem] rounded-full',
    'terms': 'text-[1.125rem] text-center text-[#333333]',
    'signin': 'text-[1.25rem] text-center color-[#777777]',
    'hypertext': 'text-[#82C07F] font-extrabold',
    'flag': 'absolute top-[25%] left-4'
}

const maxDate: Date = new Date(new Date().setFullYear(new Date().getFullYear() - 18));

const signUpSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters long"),
    email: z.string().email("Invalid email address"),
    dob: z.date({
        required_error: "Please select a date"
    }).max(maxDate, "You must be at least 18 years old"),
    language: z.string().min(1, {
        message: "Please select a language",
    }),
    country: z.string().min(1, {
        message: "Please select a country",
    }),
    address: z.string().min(2, "Name must be at least 2 characters long"),
    phoneNumber: z.string()
        .regex(/^[0-9]+$/, "Enter a valid phone number")
        .min(11, "Phone number must be at least 11 characters long"),
    flag: z.string().min(1, {
        message: "Please select dialing code",
    }),
});

export type FormValues = {
    name: string;
    email: string;
    language: string;
    dob: Date | null;
    country: string;
    address: string;
    phoneNumber: string;
    flag: string;
};

const SignUpForm = (): React.JSX.Element => {
    const [userFlag, setUserFlag] = useState<string>('us');
    const dispatch: AppDispatch = useDispatch();
    const countries = Countries.data;
    const languages = Languages.data;

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            country: 'us',
            flag: '+1',
            dob: null
        },
    });

    const onSubmit: SubmitHandler<FormValues> = (data: Record<string, any>) => {
        console.log("Form Data:", data);
        dispatch(increment());
    };

    const flagUrl = `../../assets/images/country/${userFlag}.svg`;

    return (
        <Box>
            <ProgressBar title='Personal Information' />
            <Box>
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

                    <FormDatePicker name='dob'
                        placeholder='Date of Birth'
                        className={styleSheet.inputStyle}
                        maxDate={maxDate}
                        control={control}
                        error={errors.dob?.message}
                    />

                    <FormSelect name='language'
                        className={`${styleSheet.selectStyle} ${styleSheet.inputStyle}`}
                        register={register}
                        error={errors.language?.message}>
                        <option value="" disabled>Language of preference</option>
                        {languages.map((item) => (
                            <option value={item} key={item}>{item}</option>
                        ))}
                    </FormSelect>

                    <FormSelect name='country'
                        className={`${styleSheet.selectStyle} ${styleSheet.inputStyle}`}
                        register={register}
                        error={errors.country?.message}
                        onChange={(e: any) => setUserFlag(e.target.value)}>
                        <option value="" disabled>Country</option>
                        {countries.map((item) => (
                            <option value={item.code} key={item.name}>{item.name}</option>
                        ))}
                    </FormSelect>

                    <Box className='flex'>
                        <Box className='w-[25%] relative'>
                            <label className={styleSheet.flag}>
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
                                error={errors.phoneNumber?.message} />
                        </Box>
                    </Box>

                    <FormTextArea
                        className={`${styleSheet.inputStyle} pt-5 text-[#9ca3af] h-[9.375rem]`}
                        register={register}
                        error={errors.address?.message}
                        name='address'
                        placeholder='Address'></FormTextArea>

                    <FormButton title='Continue'
                        className={styleSheet.button}
                        type='submit'
                    ></FormButton>

                    <Box className='flex justify-center'>
                        <Box className='w-[80%]'>
                            <TextComponent className={styleSheet.terms}>
                                By continuing, you accept our <Link className={styleSheet.hypertext} to='/terms'>Terms and Condition and Privacy Policy</Link>
                            </TextComponent>
                        </Box>
                    </Box>

                    <Box className='flex justify-center mt-5'>
                        <Box className='w-[80%]'>
                            <TextComponent className={styleSheet.signin}>
                                Already have an account? <Link className={styleSheet.hypertext} to='/sign-in'>Login</Link>
                            </TextComponent>
                        </Box>
                    </Box>
                </Form>
            </Box>
        </Box>
    )
}

export default SignUpForm;