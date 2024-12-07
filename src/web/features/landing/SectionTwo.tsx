import React from 'react';
import Section from "../../components/Section";
import { Style, style as tw } from 'twrnc';
import { useLandingPageContext } from '../../context/LandingPageContext';
import Box from '../../components/Box';
import { TextComponent, BoldTextComponent } from '../../components/Text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faStar } from '@fortawesome/free-solid-svg-icons';

interface StyleSheet {
    [key: string]: string
}

const styleSheet: StyleSheet = {
    'sectionStyle': 'flex items-center justify-center flex-col',
    'contentWrapper': 'mt-[20px] pb-[30px] pt-[60px] flex justify-between items-center',
    'subHeader': 'text-[10px] md:text-[20px] text-white',
    'iconWrapper': 'flex md:flex-row flex-col justify-between py-12 w-[100%]',
    'iconStyle': 'w-full h-auto',
    'headerText': 'text-white text-center font-[Lexend-ExtraBold]',
    'iconSize': 'px-2 mb-5 md:m-0',
    'starIcon': 'inline-block relative text-[#8DECB4] h-[3.75rem] w-[3.75rem]',
}

const SectionTwo = (): React.JSX.Element => {
    const { marginX, h1Size } = useLandingPageContext();
    return (
        <Section parentClassName='bg-[#141E46]'
            childClassName={`${marginX} ${styleSheet.sectionStyle}`}
        >
            <Box className={styleSheet.contentWrapper}>
                <span>
                    <img src='../../assets/images/Star.svg' />
                </span>
                <Box className='px-5'>
                    <BoldTextComponent className={`${h1Size} ${styleSheet.headerText}`}>The SwiftPaay Advantage</BoldTextComponent>
                </Box>
                <span>
                    <img src='../../assets/images/Star.svg' />
                </span>
            </Box>
            <Box className='text-center'>
                <Box>
                    <TextComponent className={styleSheet.subHeader}>Discover why SwiftPaay is the best solution for fast, secure, and</TextComponent>
                </Box>
                <Box>
                    <TextComponent className={styleSheet.subHeader}>affordable international money transfers.</TextComponent>
                </Box>
            </Box>
            <Box className={styleSheet.iconWrapper}>
                <Box className={styleSheet.iconSize}>
                    <img src='../../assets/images/advantage_one.svg'
                        alt='advantages of swiftpaay'
                        className={styleSheet.iconStyle} />
                </Box>
                <Box className={styleSheet.iconSize}>
                    <img src='../../assets/images/advantage_two.svg'
                        alt='advantages of swiftpaay'
                        className={styleSheet.iconStyle} />
                </Box>
                <Box className={styleSheet.iconSize}>
                    <img src='../../assets/images/advantage_three.svg'
                        alt='advantages of swiftpaay'
                        className={styleSheet.iconStyle} />
                </Box>
            </Box>
        </Section>);
};

export default SectionTwo;