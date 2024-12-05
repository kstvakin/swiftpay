import React from 'react';
import Section from '../../components/Section';
import { Style, style as tw } from 'twrnc';
import { useLandingPageContext } from '../../context/LandingPageContext';
import Box from '../../components/Box';
import { TextComponent } from '../../components/Text';

interface StyleSheet {
    [key: string]: string
}

const styleSheet: StyleSheet = {
    'sectionBackground': 'bg-cover bg-center bg-no-repeat bg-section-3-bg',
    'boxContainer': 'size-full sm:size-1/3 h-auto px-[0.25rem] pb-5',
    'iconSize': 'size-[40px] md:size-[80px] inline-block',
    'imgStyle': 'w-full h-auto',
    'wrapper': 'flex flex-col md:flex-row justify-center pt-10 w-full m-auto text-center',
    'sectionWidthAndPadding': 'py-10 w-full bg-gradient-to-b from-section-three-gradient-1 to-section-three-gradient-2',
    'boldFont': 'font-[Lexend-ExtraBold]',
    'headlineText': 'text-[16px] md:text-[32px]'
};

const SectionThree = (): React.JSX.Element => {
    const { marginX, h1Size } = useLandingPageContext();
    return (
        <Section parentClassName={styleSheet.sectionBackground}

            childClassName='relative'
        >
            <Box className={styleSheet.sectionWidthAndPadding}>
                <Box className={marginX}>
                    <Box className='text-center'>
                        <TextComponent className={`${h1Size} ${styleSheet.boldFont}`}>Transfer Money Globally</TextComponent>
                    </Box>
                    <Box className={styleSheet.wrapper}>
                        <Box className={styleSheet.boxContainer}>
                            <Box className={styleSheet.iconSize}>
                                <img src='../../assets/images/shield.svg' alt='shiled'
                                    className={styleSheet.imgStyle} /></Box>
                            <Box><TextComponent className={`${styleSheet.boldFont} ${styleSheet.headlineText}`}>Trust Worthy</TextComponent></Box>
                            <Box><TextComponent className={styleSheet.headlineText}>We are test and trust with all information provided to be secured</TextComponent></Box>
                        </Box>
                        <Box className={styleSheet.boxContainer}>
                            <Box className={styleSheet.iconSize}>
                                <img src='../../assets/images/heart.svg' alt='heart'
                                    className={styleSheet.imgStyle} /></Box>
                            <Box><TextComponent className={`${styleSheet.boldFont} ${styleSheet.headlineText}`}>Customer Satisfaction</TextComponent></Box>
                            <Box><TextComponent className={styleSheet.headlineText}>We render our service to the best of satisfying our clients with fast and easy delivery</TextComponent></Box>
                        </Box>
                        <Box className={styleSheet.boxContainer}>
                            <Box className={styleSheet.iconSize}>
                                <img src='../../assets/images/clock.svg' alt='clock'
                                    className={styleSheet.imgStyle} /></Box>
                            <Box><TextComponent className={`${styleSheet.boldFont} ${styleSheet.headlineText}`}>24/7 Hours</TextComponent></Box>
                            <Box><TextComponent className={styleSheet.headlineText}>Our services all opened at all times to delivery efficiently to our clients</TextComponent></Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Section>
    )
};

export default SectionThree;