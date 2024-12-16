import React from 'react';
import { TextComponent } from '../../components/Text';
import Box from '../../components/Box';
import { AppStyleSheet } from '../../utils/inteface';

const styleSheet: AppStyleSheet = {
    "container": "bg-custom-border bg-center bg-no-repeat color-dashboard-black p-[2.25rem] inline-block",
    "title": "color-dashbord-green text-[1.5rem]",
    "rate": 'text-[2rem]'
};

const Rate = (): React.JSX.Element => {

    return (
        <Box className={styleSheet.container}>
            <TextComponent className={styleSheet.title}>Today's Rate</TextComponent>
            <TextComponent className={styleSheet.rate}>
                1 USD = 2000.00 NGN
            </TextComponent>
        </Box>
    )

}

export default Rate;