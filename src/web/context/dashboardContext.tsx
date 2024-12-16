import React, { createContext, PropsWithChildren, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppStyleSheet } from '../utils/inteface';


type AuthProps = PropsWithChildren<{}>;
interface ContextType {
    cssStyle: AppStyleSheet;
    settingsStyle: AppStyleSheet;
    createPinStyle: AppStyleSheet;
}
const DashboardContext = createContext<ContextType>({
    cssStyle: { mainSection: "w-3/4 m-auto px-3" },
    settingsStyle: {},
    createPinStyle: {}
});

export const DashBoardProvider = ({ children }: AuthProps) => {
    const cssStyle: AppStyleSheet = {
        "container": "mb-10 mt-28",
        "title": "text-[#777777] text-[1.125rem] my-5",
        "txnContainer": "flex justify-between py-3 px-1 mt-5",
        "txnItemContainer": 'flex items-center space-x-5',
        "name": 'text-[0.95rem]',
        "destination": 'text-[0.75rem] text-[#777777]',
        "price": 'text-[0.95rem]',
        "statusIcon": "absolute top-0 bottom-0 w-full",
        "dashIconSize": '3rem h-[30px] w-[30px]',
        'inputStyle': `w-full placeholder:text-[1.2625rem] md:placeholder:text-[1.5625rem] focus:text-[#C4C4C4] focus:bg-input focus:outline-none focus:border-input px-2 w-full h-[5.875rem] placeholder:text-[#C4C4C4] !text-[#C4C4C4] text-[1.5625rem] bg-input border border-input-border rounded-[0.625rem]`,
        'button': 'bg-[#4F914A] color-white py-[0.9375rem] px-[7.8125rem] rounded-full',
        'innerPageBg': '',
        "dashboardHeader": "h-[3.1875] w-full hidden lg:block px-5 mb-28",
        'innerPageLayoutMargin': '',
        formErrorMsg: 'text-red-500 float-none inline-block w-full mt-2',
        mainSection: "w-3/4 m-auto px-3"
    }

    const settingsStyle: AppStyleSheet = {
        header: "uppercase text-[1.25rem] text-[#333333]",
        tile: "py-[0.9375rem] px-4 flex justify-between border-[1px] border-solid border-[#EEEEEE] rounded-[0.625rem]",
        anchorText: 'text-[1rem] space-x-2 flex items-center capitalize',
        container: 'my-12 text-[#333333] space-y-2',
        pinTitle: 'text-[1.25rem] text-[#333333] mb-10'
    }

    const createPinStyle: AppStyleSheet = {
        inputWrapper: 'w-1/4 float-left'
    }

    return (
        <DashboardContext.Provider value={{
            cssStyle,
            settingsStyle,
            createPinStyle
        }}>
            {children}
        </DashboardContext.Provider>
    );
};

export const useDashBoardCss = () => useContext(DashboardContext);