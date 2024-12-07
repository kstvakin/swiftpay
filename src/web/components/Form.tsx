import React, { Children, CSSProperties, FC, ReactNode } from "react";
import Box from "./Box";
import { FieldError, FieldErrorsImpl, FieldValues, Merge, UseFormRegister } from "react-hook-form";

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
}

export const FormInput: FC<InputProps> = ({ className, name, type, placeholder, error, register, ...rest }) => {
    return (
        <Box className="mb-5">
            <input
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


export const FormButton: FC<ButtonProps> = ({ className, title, type }) => {
    return (
        <Box className="mb-5 flex justify-center">
            <button
                className={className}
                type={type}
            >{title}</button>
        </Box>
    );
};

export const Form: FC<FormProps> = ({ children, onSubmit }) => {
    return (
        <form onSubmit={onSubmit}>
            {children}
        </form>
    )
}




