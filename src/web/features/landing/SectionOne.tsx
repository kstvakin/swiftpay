import React from 'react';
import {
  StyleSheet,
  Image
} from 'react-native';
import Box from '../../components/Box';
import { useLandingPageContext } from '../../context/LandingPageContext';
import Section from '../../components/Section';
import { BoldTextComponent, TextComponent } from '../../components/Text';

interface StyleSheet {
  [key: string]: string
}

const styleSheet: StyleSheet = {
  'sectionStyle': 'translate-y-12 bg-[#8DECB4] rounded-t-[50px] flex items-center justify-center flex-col md:px-0 px-2 mx-4 md:mx-8',
  'header': 'md:text-[64px]/[80px] text-[32px]/[40px] text-[#141E46] font-[Lexend-Regular] font-semibold',
  'subHeaderTextSize': 'text-center text-[16px] md:text-[32px] text-[#333333]',
  'textCenter': 'text-center',
  'subHeaderSpacing': 'pb-2 text-center',
  'imageSpacing': 'sm:w-3/4 mt-5',
  'appStoreWrapper': 'flex items-center justify-center w-full space-x-4 sm:space-x-10 mt-7',
  'appIconWrapper': '',
  'iconSize': 'w-full justify-self-center',
  'bgBox': 'rounded bg-black w-[60%] p-[3.5px] ',
};


const SectionOne = (): React.JSX.Element => {
  const { marginX } = useLandingPageContext();
  return (
    <Section parentClassName='bg-white'
      childClassName={`${styleSheet.sectionStyle}`}
    >
      <Box className='mb-2 mt-24'>
        <Box className={styleSheet.textCenter}>
          <TextComponent
            className={styleSheet.header}>Fast and Secure Money</TextComponent></Box>
        <Box className={styleSheet.textCenter}>
          <BoldTextComponent
            className={styleSheet.header}>Transfers Across the Globe</BoldTextComponent>
        </Box>
      </Box>
      <Box className='w-[85%] sm:w-[55%] mb-2'>
        <Box className={styleSheet.subHeaderSpacing}>
          <TextComponent className={styleSheet.subHeaderTextSize}>Send funds to bank account and mobile
            wallets instantly, with no hidden fees.</TextComponent>
        </Box>
      </Box>

      <Box className={styleSheet.appStoreWrapper}>
        <div className={styleSheet.appIconWrapper}>
          <a href='#'>
            <img
              src="../../assets/images/google.png"
              alt='google'
              className={styleSheet.iconSize} />
          </a>
        </div>
        <div className={styleSheet.appIconWrapper}>
          <a href='#'>
            <img
              src="../../assets/images/apple.png"
              alt='apple'
              className={styleSheet.iconSize} />
          </a>
        </div>
      </Box>


      <Box className={styleSheet.imageSpacing}>
        <img
          src="../../assets/images/ui.png"
          alt='ui'
          className='w-full h-auto'
        />
      </Box>


    </Section>
  );
};

export default SectionOne;