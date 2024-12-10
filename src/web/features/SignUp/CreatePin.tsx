import React, { ReactHTMLElement, useCallback, useState } from 'react';
import useStateManager from '../../hooks/state-manager';
import { Form, FormButton, FormInput } from '../../components/Form';
import useAppStyles from '../../hooks/css';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import Box from '../../components/Box';
import { AppDispatch, RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { setUserPin } from './createPinSlice';
import ProgressBar from '../../components/ProgressBar';
import _ from "lodash";
import { data, NavLink, useNavigate } from 'react-router-dom';
import { increment, purgeSignUpForm } from './signUpSlice';
import { useKeyBoardEvents } from '../../hooks/misc';

export type CreatePinFormValues = {
    box1: string;
    box2: string;
    box3: string;
    box4: string;
};

const createPinSchema = z.object({
    box1: z.string().min(1, { message: '*' }),
    box2: z.string().min(1, { message: '*' }),
    box3: z.string().min(1, { message: '*' }),
    box4: z.string().min(1, { message: '*' })
});

export const CreatePin = (): React.JSX.Element => {
    const { pinBoxes } = useStateManager();
    const { appStyleSheet } = useAppStyles();
    const {
        register,
        handleSubmit,
        formState: { errors, isValid, },
    } = useForm<CreatePinFormValues>({
        resolver: zodResolver(createPinSchema),
    });

    const dispatch: AppDispatch = useDispatch();

    const { handleChange, handleKeyDown } = useKeyBoardEvents(pinBoxes);

    const onSubmit: SubmitHandler<CreatePinFormValues> = (data: CreatePinFormValues) => {
        const arrayValues: string[] = [data.box1, data.box2, data.box3, data.box4];
        const value = arrayValues.join('');
        dispatch(setUserPin(value));
        dispatch(increment());
    };

    return (
        <Box>
            <ProgressBar />
            <Form onSubmit={handleSubmit(onSubmit)}>
                {pinBoxes.map((_, index: number) => {
                    const inputName = `box${index + 1}`;
                    return (
                        <div className='w-1/4 float-left'
                            key={index}>
                            <FormInput
                                id={`pin-input-${index}`}
                                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handleKeyDown(e, index)}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, index)}
                                name={inputName}
                                placeholder='*'
                                className={`${appStyleSheet.inputStyle} text-center`}
                                type='password'
                                maxLength={1}
                                register={register} />
                        </div>);
                })}
                <Box className='float-none mt-10'>
                    <FormButton title='Continue'
                        className={`${appStyleSheet.button} block mb-0`}
                        type='submit'
                        disabled={!isValid}
                    ></FormButton>

                </Box>
            </Form>
        </Box>
    )
}


export const ConfirmPin = (): React.JSX.Element => {
    const { pinBoxes } = useStateManager();
    const { appStyleSheet } = useAppStyles();
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<CreatePinFormValues>({
        resolver: zodResolver(createPinSchema),
    });
    const dispatch: AppDispatch = useDispatch();
    const pinState = useSelector((state: RootState) => state.pin.pinState);
    const { handleChange, handleKeyDown } = useKeyBoardEvents(pinBoxes);
    const [inCorrectPin, setInCorrectPin] = useState(false);
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<CreatePinFormValues> = (data: Record<string, any>) => {
        const arrayValues: string[] = [data.box1, data.box2, data.box3, data.box4];
        const value = arrayValues.join('');
        if (pinState !== value) {
            setInCorrectPin(true)
        }
        console.log(pinState, value)
        dispatch(purgeSignUpForm());
        navigate('/sign-in');
    };

    return (
        <Box>
            <ProgressBar />
            <Form onSubmit={handleSubmit(onSubmit)}>
                {pinBoxes.map((_, index: number) => {
                    const inputName = `box${index + 1}`;
                    return (
                        <div className='w-1/4 float-left'
                            key={index}>
                            <FormInput
                                id={`pin-input-${index}`}
                                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handleKeyDown(e, index)}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, index)}
                                name={inputName}
                                placeholder='*'
                                className={`${appStyleSheet.inputStyle} text-center`}
                                type='password'
                                maxLength={1}
                                register={register} />
                        </div>);
                })}
                {inCorrectPin && (<p className='text-red-500 float-none inline-block w-full mt-2'>Pin is incorrect</p>)}
                <Box className='float-none mt-10'>
                    <FormButton title='Continue'
                        className={`${appStyleSheet.button} block`}
                        type='submit'
                        disabled={!isValid}
                    ></FormButton>
                </Box>
            </Form >
        </Box >
    )
}