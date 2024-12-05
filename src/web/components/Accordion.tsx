import React, { FC, useState } from "react";
import { TextComponent } from "./Text";
import { Style, style as tw } from 'twrnc';
import Box from "./Box";

interface BoxProps {
    items: Record<string, string>[];
}

interface StyleSheet {
    [key: string]: Style | Record<string, string>
}

const styleSheet: StyleSheet = {
    'accordionContent': tw(
        'p-[10px]',
        'border-b-[1px]',
        'border-[#555555]',
        'rounded-[4px]',
        'color-[#333333]',
        'text-[0.75rem]'
    )
};

const Accordion: FC<BoxProps> = ({ items }) => {
    let defaultValue: any = 0;

    const [activeIndex, setActiveIndex] = useState(defaultValue);

    const handleToggle = (index: any) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="accordion">
            {items.map((item, index) => (
                <div key={index} className="accordion-item">
                    <Box
                        onClick={() => handleToggle(index)}
                        style={{
                            cursor: "pointer",
                            background: "#ffffff",
                            padding: "10px",
                            ...(activeIndex !== index && { borderBottom: "1px solid #555555" }),
                            marginBottom: "5px",
                        }}
                    >
                        <Box style={tw('py-5')}>
                            <div
                                className='float-left'
                                style={tw('text-[#141E46]')}>{item.title}</div>
                            <div className="float-right">+</div>
                        </Box>
                    </Box>
                    {activeIndex === index && (
                        <div
                            className="accordion-content"
                            style={styleSheet.accordionContent}
                        >
                            {item.content}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordion;