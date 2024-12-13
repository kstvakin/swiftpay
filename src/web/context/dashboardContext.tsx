import React, { createContext, PropsWithChildren, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppStyleSheet } from '../utils/inteface';


type AuthProps = PropsWithChildren<{}>;
interface ContextType {
    cssStyle: AppStyleSheet;
}
const DashboardContext = createContext<ContextType>({
    cssStyle: {
        "container": "",
        "title": "",
        "txnContainer": "",
        "txnItemContainer": "",
        "name": "",
        "destination": "",
        "price": "",
        "statusIcon": "",
        "dashIconSize": ""
    }
});

export const DashBoardProvider = ({ children }: AuthProps) => {


    const cssStyle: AppStyleSheet = {
        "container": "mb-10",
        "title": "text-[#777777] text-[1.125rem] my-5",
        "txnContainer": "flex justify-between py-3 px-1 mt-5",
        "txnItemContainer": 'flex items-center space-x-5',
        "name": 'text-[0.95rem]',
        "destination": 'text-[0.75rem] text-[#777777]',
        "price": 'text-[0.95rem]',
        "statusIcon": "absolute top-0 bottom-0 w-full",
        "dashIconSize": '3rem h-[30px] w-[30px]'
    }

    return (
        <DashboardContext.Provider value={{ cssStyle }}>
            {children}
        </DashboardContext.Provider>
    );
};

export const useDashBoardCss = () => useContext(DashboardContext);