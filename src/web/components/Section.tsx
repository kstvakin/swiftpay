import React, { CSSProperties, FC, ReactNode } from "react";
import Box from "./Box";

interface BoxProps {
    children: ReactNode;
    parentStyle?: CSSProperties; // Accepts inline styles
    childStyle?: CSSProperties;
    parentClassName?: string;    // Optional: Allows additional CSS classes
    childClassName?: string;
}

const Section: FC<BoxProps> = ({ children, parentStyle, childStyle, childClassName, parentClassName }) => {
    return (
        <Box style={parentStyle} className={parentClassName}>
            <Box style={childStyle} className={childClassName}>
                {children}
            </Box>
        </Box>
    );
};

export default Section;
