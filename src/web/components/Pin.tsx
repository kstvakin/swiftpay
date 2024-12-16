import React, { FC, useState } from 'react';
import z from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import useStateManager from '../hooks/state-manager';
import { useDashBoardCss } from '../context/dashboardContext';
import { AppDispatch } from '../store/store';
import { useDispatch } from 'react-redux';
import { useKeyBoardEvents } from '../hooks/misc';
import Box from './Box';
import { FormInput, FormButton, Form } from './Form';
import { setUserPin } from '../features/SignUp/createPinSlice';

interface PinProps {
    initialPinValue?: string;
    name: string;
    handlePropSubmit: () => void
}

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

export const Pin: FC<PinProps> = ({ initialPinValue, name, handlePropSubmit }) => {
    const { pinBoxes } = useStateManager();
    const { cssStyle: appStyleSheet, createPinStyle } = useDashBoardCss();
    const [inCorrectPin, setInCorrectPin] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { isValid, },
    } = useForm<CreatePinFormValues>({
        resolver: zodResolver(createPinSchema),
    });
    const dispatch: AppDispatch = useDispatch();

    const { handleChange, handleKeyDown } = useKeyBoardEvents(pinBoxes);

    const onSubmit: SubmitHandler<CreatePinFormValues> = (data: CreatePinFormValues) => {
        const arrayValues: string[] = [data.box1, data.box2, data.box3, data.box4];
        const value = arrayValues.join('');

        switch (name) {
            case 'confirmation':
                if (initialPinValue !== value) {
                    setInCorrectPin(true)
                } else {
                    handlePropSubmit();
                }
            default:
                dispatch(setUserPin(value));
                handlePropSubmit();
        }
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Box className='flex'>
                {pinBoxes.map((_, index: number) => {
                    const inputName = `box${index + 1}`;
                    return (
                        <div className={createPinStyle.inputWrapper}
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
            </Box>
            {inCorrectPin && (<p className={appStyleSheet.formErrorMsg}>Pin is incorrect</p>)}
            <Box className='mt-10'>
                <FormButton title='Continue'
                    className={`${appStyleSheet.button} block mb-0`}
                    type='submit'
                    disabled={!isValid}
                ></FormButton>
            </Box>
        </Form>

    )

};

export default Pin;