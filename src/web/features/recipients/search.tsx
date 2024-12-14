import React, { forwardRef, useRef, useState } from 'react';
import { FormInput } from '../../components/Form';
import { SubmitHandler, useForm } from 'react-hook-form';
import Box from '../../components/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';

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
            <Box className='border-search-bar border-[1px] border-solid my-10 inline-block w-full'>
                <span className='float-left w-[5%] px-3 py-5'>
                    <FontAwesomeIcon style={{ color: 'rgba(160, 161, 162, 0.95)' }}
                        icon={faSearch}
                    />
                </span>
                <FormInput
                    className='float-left focus:bg-white focus:outline-none focus:border-0  w-full px-3 py-5  text-[rgba(160, 161, 162, 0.05)] placeholder:text-[rgba(160, 161, 162, 0.05)]'
                    name='recipient'
                    register={register}
                    type='text'
                    onChange={handleSubmit(onSubmit)}
                    placeholder='search by recipient'
                    spacing='m-0 float-left w-[95%]'
                />
            </Box>
        </Box>
    )
}

export default SearchBar;