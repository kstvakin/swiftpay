import React, { FC, useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { TextComponent } from './Text';
import Box from './Box';
import { RootState } from '../store/store';

interface BarProps {
    title?: string;
}

const ProgressBar: FC<BarProps> = ({ title }): React.JSX.Element => {
    const count = useSelector((state: RootState) => state.signup.length);
    return (
        <Box>
            <div className="h-4 w-full bg-[#EEEEEE] rounded">
                <div className={`w-[${count}%] h-4 bg-[#82C07F] rounded`}></div>
            </div>
            <div className='mt-5 mb-10'>
                <TextComponent className='text-[#777777] text-[1.875rem]'>{title}</TextComponent>
            </div>
        </Box>
    )
}

export default ProgressBar;