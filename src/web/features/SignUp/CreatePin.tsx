import React from 'react';
import Box from '../../components/Box';
import { AppDispatch, RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import ProgressBar from '../../components/ProgressBar';
import { data, useNavigate } from 'react-router-dom';
import { increment, purgeSignUpForm } from './signUpSlice';
import Pin from '../../components/Pin';

export const CreatePin = (): React.JSX.Element => {
    const dispatch: AppDispatch = useDispatch();
    const onSubmit = (): void => {
        dispatch(increment());
    };

    return (
        <Box>
            <ProgressBar />
            <Pin name="create" handlePropSubmit={onSubmit} />
        </Box>
    )
}


export const ConfirmPin = (): React.JSX.Element => {
    const dispatch: AppDispatch = useDispatch();
    const inputedValue = useSelector((state: RootState) => state.pin.pinState);
    const navigate = useNavigate();

    const onSubmit = (): void => {
        dispatch(purgeSignUpForm());
        navigate('/sign-in');
    };

    return (
        <Box>
            <ProgressBar />
            <Pin name="confirmation"
                handlePropSubmit={onSubmit}
                initialPinValue={inputedValue}
            />
        </Box >
    )
}