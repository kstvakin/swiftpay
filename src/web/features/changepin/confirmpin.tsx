import React, { useState } from 'react';
import Pin from '../../components/Pin';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { TextComponent } from '../../components/Text';
import { useDashBoardCss } from '../../context/dashboardContext';


export const ConfirmPin = (): React.JSX.Element => {
    const navigate = useNavigate();
    const { settingsStyle } = useDashBoardCss();
    const inputedValue = useSelector((state: RootState) => state.pin.pinState);

    const onSubmit = (): void => {
        navigate('/settings');
    };

    return (
        <>
            <TextComponent className={settingsStyle.pinTitle}>Enter New Pin</TextComponent>
            <Pin name="confirmation"
                handlePropSubmit={onSubmit}
                initialPinValue={inputedValue}
            />
        </>
    )

};

export default ConfirmPin;