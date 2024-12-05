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
    'sectionBackground': 'bg-[#E5FFF0]',
    'boxContainer': 'size-full md:size-1/4 h-auto py-3 md:px-0 px-2',
    'iconSize': 'size-8',
    'imgStyle': 'w-full h-auto',
    'wrapper': 'flex flex-col md:flex-row py-3 justify-around',
    'sectionWidthAndPadding': 'py-10 w-full',
    'gridItem': 'py-40 relative w-[100%]',
    'gridItemBg': 'bg-cover bg-center bg-no-repeat flex items-end bg-section-four-box1',
    'gridItemChild': 'absolute bottom-[15%] left-[15px] translate-y-6',
    'gridItemChildRverse': 'absolute bottom-[20%] left-[5px] md:left-[15px]',
    'roundedBox': 'bg-white py-1.5 px-2 rounded-lg inline-block mb-3',
    'iconWrapper': 'size-[0.55rem] w-auto pr-1'
};

const SectionFour = (): React.JSX.Element => {
    const { h1Size } = useLandingPageContext();
    return (
        <Section parentClassName={styleSheet.sectionBackground}
            childClassName='relative'
        >
            <Box className={styleSheet.sectionWidthAndPadding}>
                <Box>
                    <Box className='text-center'>
                        <TextComponent className={`${h1Size} font-[Lexend-ExtraBold]`}>How SwiftPaay Works</TextComponent>
                    </Box>
                    <Box className={styleSheet.wrapper}>
                        <Box className={styleSheet.boxContainer}>
                            <Box
                                className={styleSheet.gridItemBg}>
                                <Box className={styleSheet.gridItem}>
                                    <Box className={styleSheet.gridItemChild}>
                                        <img src='../../../../assets/images/form.png'
                                            className='size-15 w-auto' />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box className={styleSheet.boxContainer}>
                            <Box
                                className={`${styleSheet.gridItemBg} bg-section-four-box2`}>
                                <Box className={styleSheet.gridItem}>
                                    <Box className={styleSheet.gridItemChildRverse}>
                                        <Box className='px-5'>
                                            <Box className={styleSheet.roundedBox}>
                                                <Box className='flex items-center'>
                                                    <Box className={styleSheet.iconWrapper}>
                                                        <img
                                                            alt=''
                                                            className='flex-1'
                                                            src='../../../../assets/images/card.svg' />
                                                    </Box>
                                                    <TextComponent className='text-xs'>Add your card fast and secured</TextComponent>
                                                </Box>
                                            </Box>
                                            <Box className={styleSheet.roundedBox}>
                                                <Box className='flex items-center'>
                                                    <Box className={styleSheet.iconWrapper}>
                                                        <img
                                                            alt=''
                                                            className='flex-1'
                                                            src='../../../../assets/images/lock.svg' />
                                                    </Box>
                                                    <TextComponent className='text-xs'>Transactions are processed almost instantenously</TextComponent>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box className={styleSheet.boxContainer}>
                            <Box
                                className={`${styleSheet.gridItemBg} bg-section-four-box3`}>
                                <Box className={styleSheet.gridItem}>
                                    <Box className={styleSheet.gridItemChild}>
                                        <img src='../../../../assets/images/card-details.png'
                                            style={tw('h-[6.25rem]')} />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Section>
    )
};

export default SectionFour;