import React, { Children, CSSProperties, FC, ReactNode } from "react";
import Box from "./Box";
import { Controller, UseFormRegister } from "react-hook-form";
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

interface FormProps {
    children: ReactNode;
    onSubmit: () => void;
}

interface InputProps {
    className?: string;
    name: string;
    type: string;
    value?: string;
    placeholder?: string;
    register: UseFormRegister<any>,
    error: any
}

interface TextAreaProps {
    className?: string;
    name: string;
    placeholder: string;
    register: UseFormRegister<any>,
    error: any
}

interface SelectProps {
    className?: string;
    name: string;
    register: UseFormRegister<any>,
    error: any
    children: ReactNode;
    onChange?: (e: any) => void;
}

interface ButtonProps {
    className: string;
    title: string;
    type: "button" | "submit" | "reset" | undefined;
    render?: React.JSX.Element,
    position?: string
}

interface DatePickerProps {
    placeholder: string;
    name: string;
    className?: string;
    error: any;
    control: any;
    maxDate?: Date
}

export const FormInput: FC<InputProps> = ({ className, name, type, placeholder, error, register, ...rest }) => {
    return (
        <Box className="mb-5">
            <input
                autoComplete="off"
                placeholder={placeholder}
                className={className}
                type={type}
                {...register(name)}
                {...rest} />
            {error && <p className="text-sm text-red-600">{error}</p>}
        </Box>
    );
};

export const FormSelect: FC<SelectProps> = ({ className, name, children, error, register, ...rest }) => {
    return (
        <Box>
            <Box className="mb-5">
                <select
                    defaultValue=""
                    className={className}
                    {...register(name)}
                    {...rest}>
                    {children}
                </select>
                {error && <p className="text-sm text-red-600">{error}</p>}
            </Box>
        </Box>
    );
};

export const FormTextArea: FC<TextAreaProps> = ({ className, name, error, placeholder, register, ...rest }) => {
    return (
        <Box className="mb-5">
            <textarea
                className={className}
                placeholder={placeholder}
                {...register(name)}
                {...rest}></textarea>
            {error && <p className="text-sm text-red-600">{error}</p>}
        </Box>
    );
};


export const FormButton: FC<ButtonProps> = ({ className, title, type, render, position }) => {
    return (
        <Box className="mb-5 flex justify-center">
            <button
                className={className}
                type={type}
            >
                {position && position === 'left' ? render : null}
                {title}
                {position && position === 'right' ? render : null}
            </button>
        </Box>
    );
};

export const FormDatePicker: FC<DatePickerProps> = ({ className, maxDate, placeholder, name, error, control }) => {
    return (
        <Box className="mb-5">
            <div className="relative">
                <Controller
                    name={name}
                    control={control}
                    render={({ field }) => (
                        <ReactDatePicker
                            {...field}
                            selected={field.value}
                            autoComplete="off"
                            placeholderText={placeholder}
                            className={className}
                            maxDate={maxDate}
                            dateFormat="dd-MM-yyyy"
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                            onChange={(data) => field.onChange(data)}
                        />
                    )}
                />
                <div className="-z-10 bg-calender absolute h-[1.5rem] w-[1.5rem] bg-cover top-[35%] right-[1.45rem]"></div>
            </div>
            {error && <p className="text-sm text-red-600">{error}</p>}
        </Box>)
}

export const Form: FC<FormProps> = ({ children, onSubmit }) => {
    return (
        <form onSubmit={onSubmit}>
            {children}
        </form>
    )
}




