import React, { forwardRef, useRef, useState } from 'react';
import { FormInput } from '../../components/Form';
import { SubmitHandler, useForm } from 'react-hook-form';
import Box from '../../components/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { TextComponent } from '../../components/Text';
import * as recipients from "../../data/recipients.json";

export type FormValues = {
    recipient: string;
};

const SearchBar = (): React.JSX.Element => {
    const {
        register,
        handleSubmit
    } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
        console.log(data)
    };

    return (
        <Box>
            <Box className='border-search-bar border-[1px] border-solid my-10 flex w-full'>
                <span className='w-[5%] px-3 py-5'>
                    <FontAwesomeIcon style={{ color: 'rgba(160, 161, 162, 0.95)' }}
                        icon={faSearch}
                    />
                </span>
                <FormInput
                    className='focus:bg-white focus:outline-none focus:border-0  w-full px-3 py-5  text-[rgba(160, 161, 162, 0.05)] placeholder:text-[rgba(160, 161, 162, 0.05)]'
                    name='transaction'
                    register={register}
                    type='text'
                    onChange={handleSubmit(onSubmit)}
                    placeholder='search by reference'
                    spacing='m-0 float-left w-[90%]'
                />
                <div className='w-[5%] px-3 py-5 flex items-center'>
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.125 0.833252C0.125 0.667492 0.190848 0.50852 0.308058 0.39131C0.425268 0.2741 0.58424 0.208252 0.75 0.208252H13.25C13.4158 0.208252 13.5747 0.2741 13.6919 0.39131C13.8092 0.50852 13.875 0.667492 13.875 0.833252C13.875 0.999012 13.8092 1.15798 13.6919 1.27519C13.5747 1.3924 13.4158 1.45825 13.25 1.45825H0.75C0.58424 1.45825 0.425268 1.3924 0.308058 1.27519C0.190848 1.15798 0.125 0.999012 0.125 0.833252ZM2.20833 4.99992C2.20833 4.83416 2.27418 4.67519 2.39139 4.55798C2.5086 4.44077 2.66757 4.37492 2.83333 4.37492H11.1667C11.3324 4.37492 11.4914 4.44077 11.6086 4.55798C11.7258 4.67519 11.7917 4.83416 11.7917 4.99992C11.7917 5.16568 11.7258 5.32465 11.6086 5.44186C11.4914 5.55907 11.3324 5.62492 11.1667 5.62492H2.83333C2.66757 5.62492 2.5086 5.55907 2.39139 5.44186C2.27418 5.32465 2.20833 5.16568 2.20833 4.99992ZM4.70833 9.16659C4.70833 9.00082 4.77418 8.84185 4.89139 8.72464C5.0086 8.60743 5.16757 8.54159 5.33333 8.54159H8.66667C8.83243 8.54159 8.9914 8.60743 9.10861 8.72464C9.22582 8.84185 9.29167 9.00082 9.29167 9.16659C9.29167 9.33235 9.22582 9.49132 9.10861 9.60853C8.9914 9.72574 8.83243 9.79159 8.66667 9.79159H5.33333C5.16757 9.79159 5.0086 9.72574 4.89139 9.60853C4.77418 9.49132 4.70833 9.33235 4.70833 9.16659Z"
                            fill="black" />
                    </svg>

                </div>
            </Box>
        </Box>
    )
}

export default SearchBar;