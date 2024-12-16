import React from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { changePinScreen } from '../SignUp/createPinSlice';
import Pin from '../../components/Pin';
import { TextComponent } from '../../components/Text';
import { useDashBoardCss } from '../../context/dashboardContext';

export const ChangePin = (): React.JSX.Element => {
    const dispatch: AppDispatch = useDispatch();
    const { settingsStyle } = useDashBoardCss();
    const onSubmit = (): void => {
        dispatch(changePinScreen(2));
    };

    return (
        <>
            <TextComponent className={settingsStyle.pinTitle}>Enter Old Pin</TextComponent>
            <Pin name="create" handlePropSubmit={onSubmit} />
        </>
    )

};

export default ChangePin;