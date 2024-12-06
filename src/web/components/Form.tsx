import React, { Children, CSSProperties, FC, ReactNode } from "react";
import Box from "./Box";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface FormProps {
    children: ReactNode;
    onSubmit: () => void;
}

interface InputProps {
    className?: string;
    name: string;
    onClick?: () => void;
    type: string;
    value?: string;
    onChange?: (event: {
        target: {
            name: string;
            value: React.SetStateAction<string>;
        };
    }) => void;
    placeholder?: string;
    register?: UseFormRegister<FieldValues>
}

interface TextAreaProps {
    className?: string;
    name: string;
    value: string;
    onChange: (event: {
        target: {
            name: string;
            value: React.SetStateAction<string>;
        };
    }) => void;
    placeholder: string;
}

interface SelectProps {
    className?: string;
    name: string;
    onClick?: () => void;
    value: string;
    onChange?: (event: {
        target: {
            name: string;
            value: React.SetStateAction<string>;
        };
    }) => void;
    children: ReactNode;
}

interface ButtonProps {
    className: string;
    onClick: () => void;
    title: string;
    type: "button" | "submit" | "reset" | undefined;
}

export const FormInput: FC<InputProps> = ({ className, onClick, name, type, onChange, placeholder, register, ...rest }) => {
    return (
        <Box className="mb-5">
            <input
                placeholder={placeholder}
                name={name}
                className={className}
                type={type}
                // {...register(name)}
                {...rest}
                onClick={onClick}
                onChange={onChange} />
        </Box>
    );
};

export const FormSelect: FC<SelectProps> = ({ className, name, onChange, children, value }) => {
    return (
        <Box className="mb-5 flex">
            <select
                name={name}
                value={value}
                className={className}
                onChange={onChange}>
                {children}
            </select>
        </Box>
    );
};

export const FormTextArea: FC<TextAreaProps> = ({ className, name, onChange, placeholder }) => {
    return (
        <Box className="mb-5">
            <textarea
                name={name}
                className={className}
                onChange={onChange}
                placeholder={placeholder}></textarea>
        </Box>
    );
};


export const FormButton: FC<ButtonProps> = ({ className, onClick, title, type }) => {
    return (
        <Box className="mb-5 flex justify-center">
            <button
                className={className}
                onClick={onClick}
                type={type}
            >{title}</button>
        </Box>
    );
};

export const Form: FC<FormProps> = ({ children }) => {
    return (
        <form>
            {children}
        </form>
    )
}




