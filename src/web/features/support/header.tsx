import React from 'react';
import Box from '../../components/Box';
import { TextComponent } from '../../components/Text';

const SupportHeader = (): React.JSX.Element => {
    return (
        <Box className='mt-20 space-y-2'>
            <TextComponent className='text-[1.5rem]/[1.875rem] font-extrabold'>Share your ideas or issues with us!</TextComponent>
            <TextComponent className='text-[1rem]/[1.21rem]'>What would you like to see that would help make your experience better?</TextComponent>
        </Box>
    )

};

export default SupportHeader;