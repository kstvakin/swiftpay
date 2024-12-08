import React, { FC, ReactNode, useEffect, useState } from 'react';
import '../../styles/inner-page.css';
import { AppStyleSheet } from '../../utils/inteface';
import { TextComponent } from '../../components/Text';

interface LayoutProps {
    children: ReactNode;
    title?: string;
    className?: string;
}

const styleSheet: AppStyleSheet = {
    'pageContainer': 'relative overflow-x-hidden min-h-[100vh]',
    'circleOne': 'absolute z-[-1]  top-0 left-0 lg:top-[-10%]',
    'circleTwo': 'absolute z-[-1] top-0 lg:top-[-10%] right-0',
    'circleThree': 'absolute z-[-1] bottom-0 left-0',
    'circleFour': 'absolute z-[-1] bottom-0 right-0',
    'formWrapper': 'h-full w-full flex justify-center my-[6.25rem]',
    'title': 'text-center text-[1.875rem]/[2.625rem] md:text-[1.875rem]/[1.3125rem] font-medium font-[Lexend-Regular]',
    'inputStyle': 'focus:outline-none focus:border-input px-2 w-full h-[5.875rem] placeholder:text-[#9ca3af] bg-input border border-input rounded-[0.625rem]',
    'selectStyle': 'text-[#9ca3af] custom-select',
    'topCircle': 'w-[100px] h-[100px] md:w-[175px] md:h-[175px] lg:w-auto lg:h-auto',
    'bottomCircle': 'w-[150px] h-[100px] md:w-[250px] md:h-[150px] lg:w-auto lg:h-auto'
}
const InnerPageLayout: FC<LayoutProps> = ({ children, title, className }) => {


    return (
        <div className={styleSheet.pageContainer}>
            <div className={styleSheet.circleOne}>
                <img className={styleSheet.topCircle} src="../../assets/images/semi-circle-1.png" />
            </div>

            <div className={styleSheet.circleTwo}>
                <img className={styleSheet.topCircle} src="../../assets/images/semi-circle-2.png" />
            </div>

            <div className={styleSheet.circleThree}>
                <img className={styleSheet.bottomCircle} src="../../assets/images/semi-circle-3.png" />
            </div>
            <div className={styleSheet.circleFour}>
                <img className={styleSheet.bottomCircle} src="../../assets/images/semi-circle-4.png" />
            </div>

            <div className={`${styleSheet.formWrapper} ${className}`}>
                <div className='w-10/12 lg:w-[45%]'>
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