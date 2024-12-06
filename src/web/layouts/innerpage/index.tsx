import React, { FC, ReactNode, useEffect, useState } from 'react';
import '../../styles/inner-page.css';
import { AppStyleSheet } from '../../utils/inteface';
import { TextComponent } from '../../components/Text';

interface LayoutProps {
    children: ReactNode;
    title?: string;
}

const styleSheet: AppStyleSheet = {
    'pageContainer': 'relative overflow-x-hidden min-h-[100vh]',
    'circleOne': 'absolute z-[-1] top-[-20%] left-[-5%]',
    'circleTwo': 'absolute z-[-1] top-[-15%] right-[0]',
    'circleThree': 'absolute z-[-1] bottom-[0] left-[-25%]',
    'circleFour': 'absolute z-[-1] bottom-[0] right-[-5%]',
    'formWrapper': 'h-full w-full flex justify-center my-[6.25rem]',
    'title': 'text-center text-[1.875rem]/[1.3125rem] font-medium font-[Lexend-Regular]',
    'inputStyle': 'focus:outline-none focus:border-input px-2 w-full h-[5.875rem] placeholder:text-[#9ca3af] bg-input border border-input rounded-[0.625rem]',
    'selectStyle': 'text-[#9ca3af] custom-select'
}
const InnerPageLayout: FC<LayoutProps> = ({ children, title }) => {


    return (
        <div className={styleSheet.pageContainer}>
            <div className={styleSheet.circleOne}>
                <img src="../../assets/images/semi-circle-1.png" />
            </div>

            <div className={styleSheet.circleTwo}>
                <img src="../../assets/images/semi-circle-2.png" />
            </div>

            <div className={styleSheet.circleThree}>
                <img src="../../assets/images/semi-circle-3.png" />
            </div>
            <div className={styleSheet.circleFour}>
                <img src="../../assets/images/semi-circle-4.png" />
            </div>

            <div className={styleSheet.formWrapper}>
                <div className='w-[45%]'>
                    <div className='mb-16'>
                        <TextComponent className={styleSheet.title}>{title}</TextComponent>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default InnerPageLayout;