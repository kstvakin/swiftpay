import React, { useState } from 'react';
import '../../styles/inner-page.css';
import { AppStyleSheet } from '../../utils/inteface';
import { Form, FormButton, FormInput } from '../../components/Form';
import z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from 'react-hook-form';
import Box from '../../components/Box';
import ProgressBar from '../../components/ProgressBar';
import { useDispatch } from "react-redux";
import { AppDispatch } from '../../store/store';
import { increment } from './signUpSlice';
import { setUserPassword } from './passwordSlice';


const styleSheet: AppStyleSheet = {
    'inputStyle': `mb-5 w-full placeholder:text-[1.2625rem] md:placeholder:text-[1.5625rem] focus:text-[#C4C4C4] 
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

const signUpSchema = z.object({
    password: z.string().min(8, { message: "Password must be at least 8 characters long." })
        .regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            { message: "Password must include at least one uppercase letter, one number, and one special character.", }),
    cpassword: z.string({
        required_error: "Please confirm password"
    })
}).refine(data => data.password === data.cpassword,
    { message: "Passwords do not match.", path: ["cpassword"] });

export type FormValues = {
    password: string;
    cpassword: string;
};

const CreatePasswordForm = (): React.JSX.Element => {
    const dispatch: AppDispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(signUpSchema),
    });

    const onSubmit: SubmitHandler<FormValues> = (data: Record<string, any>) => {
        dispatch(increment());
        dispatch(setUserPassword(data.password));
    };

    return (
        <Box>
            <ProgressBar title='' />
            <Box>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <FormInput
                        name='password'
                        placeholder='Password'
                        className={styleSheet.inputStyle}
                        type='password'
                        register={register}
                        error={errors.password?.message} />

                    <FormInput name='cpassword'
                        placeholder='Confirm Password'
                        className={styleSheet.inputStyle}
                        type='password'
                        register={register}
                        error={errors.cpassword?.message} />

                    <FormButton title='Continue'
                        className={styleSheet.button}
                        type='submit'
                    ></FormButton>


                </Form>
            </Box>
        </Box>
    )
}

export default CreatePasswordForm;