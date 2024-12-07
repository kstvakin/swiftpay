import React from 'react';
import Section from '../../components/Section';
import { Style, style as tw } from 'twrnc';
import { useLandingPageContext } from '../../context/LandingPageContext';
import Box from '../../components/Box';
import { TextComponent } from '../../components/Text';
import Accordion from '../../components/Accordion';
import * as faq from '../../data/faq.json';

interface StyleSheet {
    [key: string]: string
}

const styleSheet: StyleSheet = {
    'sectionBackground': 'bg-[#FFFFFF] pb-10',
    'boxContainer': 'size-1/2 h-auto flex-1 shadow-2xl',
    'iconSize': 'size-8',
    'imgStyle': 'w-full h-auto',
    'wrapper': 'flex xs:flex-col flex-row justify-around',
    'sectionWidthAndPadding': 'w-full',
    'gridItem': 'py-40 relative w-[100%]',
    'gridItemBg': 'bg-cover bg-center bg-no-repeat flex h-full items-end',
    'gridItemChild': 'absolute bottom-[15%] left-[15px]',
    'gridItemChildRverse': 'absolute bottom-[50%] left-[30px]',
    'roundedBox': 'bg-white py-1.5 px-2 rounded-lg flex items-center mb-[15]',
    'iconWrapper': 'size-[0.55rem] h-[11.8px] flex justify-around mr-[3]',
    'textCenter': 'text-center'
};

const SectionSix = (): React.JSX.Element => {
    const { marginX, h1Size } = useLandingPageContext();
    const accordionItems = faq.data;
    return (
        <Section parentClassName={styleSheet.sectionBackground}
            childClassName={`${marginX} relative`}
        >
            <Box className={styleSheet.sectionWidthAndPadding}>
                <Box className={styleSheet.wrapper}>
                    <Box className={`${styleSheet.boxContainer} hidden md:block`}>
                        <div
                            className={styleSheet.gridItemBg}
                            style={{
                                backgroundImage: `url('../../../../assets/images/section-six.png'`,
                            }}>

                        </div>
                    </Box>
                    <Box className={styleSheet.boxContainer}>
                        <Box className='p-[1.5rem] pt-[2.5rem]'>
                            <Box>
                                <TextComponent className={`text-[18px] md:text-[36px] font-semibold`}>Frequently Asked Questions</TextComponent>
                            </Box>
                            <Box className='mt-[1.75rem]'>
                                <Accordion items={accordionItems} />
                            </Box>
                        </Box>
                    </Box>
                </Box>

            </Box>
        </Section>
    )

};

export default SectionSix;