import { useState } from 'react';
import useLocalStorage from './localstorage-manager';
import { AppStyleSheet } from '../utils/inteface';

function useAppStyles() {
    const appStyleSheet: AppStyleSheet = {
        'inputStyle': `w-full placeholder:text-[1.2625rem] md:placeholder:text-[1.5625rem] focus:text-[#C4C4C4] 
            focus:bg-input focus:outline-none focus:border-input px-2 w-full h-[5.875rem] 
            placeholder:text-[#C4C4C4] !text-[#C4C4C4] text-[1.5625rem] bg-input border
            border-input-border rounded-[0.625rem]`,
        'button': 'bg-[#4F914A] color-white py-[0.9375rem] px-[7.8125rem] rounded-full',
        'innerPageBg': '',
        "dashboardHeader":"h-[3.1875] w-full hidden lg:block",
        "dashIconSize": '3rem h-[30px] w-[30px]',
        'innerPageLayoutMargin': ''
    }
  return { appStyleSheet };
}

export default useAppStyles;