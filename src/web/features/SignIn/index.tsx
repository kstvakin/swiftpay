import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import { Form, FormButton, FormInput } from '../../components/Form';
import Box from '../../components/Box';
import { AppStyleSheet } from '../../utils/inteface';
import { useAuth } from '../../context/AuthContext';

export type FormValues = {
    email: string;
    password: string;
};

const signInSchema = z.object({
    password: z.string()
        .min(1, "Please enter your password")
    ,
    email: z.string().email("Invalid email address"),
});

const styleSheet: AppStyleSheet = {
    'inputStyle': `mb-5 w-full placeholder:text-[1.2625rem] md:placeholder:text-[1.5625rem] focus:text-[#C4C4C4] focus:bg-input focus:outline-none focus:border-input px-2 w-full h-[5.875rem] placeholder:text-[#C4C4C4] !text-[#C4C4C4] text-[1.5625rem] bg-input border border-input-border rounded-[0.625rem]`,
    'button': 'bg-[#4F914A] color-white py-[0.9375rem] px-[7.8125rem] rounded-full flex items-center',
}

const GoogleIcon = (): React.JSX.Element => {
    return (
        <span className='inline-block h-[16px] w-[16px] mx-2'>
            <img className='w-fit' src='../../assets/images/google-icon.svg' />
        </span>
    )
}

const SignInForm = (): React.JSX.Element => {
    const { login } = useAuth();
    const { login } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            password: ''
        }
    });


    const onSubmit: SubmitHandler<FormValues> = (data: Record<string, any>) => {
        console.log("Form Data:", data);
        login();
        login();
    };

    return (
        <Box>
            <Box className='flex justify-center my-10'>
                <img src='../../assets/images/FullLogo.svg' />
            </Box>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FormInput
                    name='email'
                    placeholder='Email Address'
                    className={styleSheet.inputStyle}
                    type='text'
                    register={register}
                    error={errors.email?.message} />
                <FormInput
                    name='password'
                    placeholder='Password'
                    className={styleSheet.inputStyle}
                    type='password'
                    register={register}
                    error={errors.password?.message} />
                <Box className='inline-block w-full'>
                    <Box className='flex justify-center'>
                        <FormButton title='Login'
                            className={styleSheet.button}
                            type='submit'
                        ></FormButton>
                    </Box>
                </Box>

            </Form>
            <Box className='my-16 relative'>
                <div className='text-[1rem] text-center'>
                    <span className='p-4 bg-white'>OR</span>
                </div>
                <div className='border-[#EEEEEE] border-[1px] w-full absolute top-[50%] mt-[-1px] -z-10'></div>
            </Box>
            <Box>
                <Box className='inline-block w-full'>
                    <Box className='flex justify-center'>
                        <FormButton title='Continue with Google'
                            className={`${styleSheet.button} bg-[#F5F7F8] !color-[#2C3137] px-[3.90625rem]`}
                            type='button'
                            render={<GoogleIcon />}
                            position='left'
                        ></FormButton>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default SignInForm;
