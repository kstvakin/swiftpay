import React, { ReactNode } from 'react';
import { Text, StyleSheet, TextStyle, StyleProp } from 'react-native';

type TextProps = {
    style?: StyleProp<TextStyle>;
    className?: string;
    children: ReactNode;
    fontFamily?: string
};

export const TextComponent: React.FC<TextProps> = ({ style, children, className }) => {
    return <div className={className}>{children}</div>;
};

export const BoldTextComponent: React.FC<TextProps> = ({ style, children, className }) => {
    return <div className={className}>{children}</div>;
};

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Lexend-Regular'
    },
    boldText: {
        fontFamily: 'Lexend-ExtraBold'
    }
});
