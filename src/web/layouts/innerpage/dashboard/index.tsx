import React, { FC, ReactNode, useEffect, useState } from 'react';
import '../../../styles/inner-page.css';
import { AppStyleSheet } from '../../../utils/inteface';
import Sidebar from './sidebar';
import Box from '../../../components/Box';
import Header from './header';
import { Circles } from '..';

interface LayoutProps {
    children?: ReactNode;
    title?: string;
    className?: string;
    renderIcon?: boolean;
}

const styleSheet: AppStyleSheet = {
    'pageContainer': 'relative flex min-h-[100vh]',
    'inputStyle': 'focus:outline-none focus:border-input px-2 w-full h-[5.875rem] placeholder:text-[#9ca3af] bg-input border border-input rounded-[0.625rem]',
    'selectStyle': 'text-[#9ca3af] custom-select',
    'topCircle': 'w-[100px] h-[100px] md:w-[175px] md:h-[175px] lg:w-auto lg:h-auto',
    'bottomCircle': 'w-[150px] h-[100px] md:w-[250px] md:h-[150px] lg:w-auto lg:h-auto'
}


const DashboardLayout: FC<LayoutProps> = ({ children, title, renderIcon }) => {
    return (
        <Box className={styleSheet.pageContainer}>
            <Box className="flex-1 flex">
                <Box className='flex-1 p-10'>
                    <Box className='inline-block w-full h-full relative'>
                        <Sidebar />
                        <Box className='w-[80%] float-left h-full'>
                            <Box>
                                <Header title={title} renderIcon={renderIcon} />
                            </Box>
                            <Box>{children}</Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Circles />
        </Box>
    )
}

export default DashboardLayout;