import React from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Style, style as tw } from 'twrnc';
import Box from '../../components/Box';

const currentYear = new Date().getFullYear();

interface StyleSheet {
  [key: string]: string
}

const styleSheet: StyleSheet = {
  'sectionWrapper': 'bg-[#141E46] text-xs sm:p-0 px-3',
  'container': 'w-full md:w-[70%] m-auto md:pt-12 pt-2 pb-5',
  'listStyle': 'p-2 pl-0 text-[8px] md:text-[16px]',
  'headingStyle': 'font-["Lexend-ExtraBold"] pb-3 text-[10px] md:text-[20px]',
  'linksSection': 'flex md:w-1/2 w-full  md:p-0 pt-5',
  'gridStyle': 'w-[50%] px-2',
  'logoWrapper': 'w-[35%] md:w-[65%] bg-white flex justify-center max-h-[50%]',
  'logoSection': 'w-full md:w-1/4 md:flex hidden',
  'layout': 'flex justify-between text-white md:flex-row flex-col',
  'socials': 'p-2 pl-0 float-left',
  'socialsIcon': 'size-3',
  'socialSection': 'w-full md:w-1/4  flex flex-col md:m-0 mt-4 px-2',
  'copyrightSection': 'border-t border-white-100 mt-5 flex justify-center py-5'
};

const Footer = (): React.JSX.Element => {
  return (
    <Box className={styleSheet.sectionWrapper}>
      <Box className={styleSheet.container}>
        <Box className={styleSheet.layout}>
          <div className={styleSheet.logoSection}>
            <div className={styleSheet.logoWrapper}>
              <img src='../../assets/images/logo.png' className='w-3/4' />
            </div>
          </div>
          <div className={styleSheet.linksSection}>
            <div className={styleSheet.gridStyle}>
              <h4 className={styleSheet.headingStyle}>About Us</h4>
              <ul>
                <li className={styleSheet.listStyle}>
                  <a href='#'>Terms of use</a>
                </li>
                <li className={styleSheet.listStyle}>
                  <a href='#'>Privacy Policy</a>
                </li>
                <li className={styleSheet.listStyle}>
                  <a href='#'>Licenses</a>
                </li>
              </ul>
            </div>
            <div className={styleSheet.gridStyle}>
              <h4 className={styleSheet.headingStyle}>Support</h4>
              <ul>
                <li className={styleSheet.listStyle}>
                  <a href='#'>Contact Us</a>
                </li>
                <li className={styleSheet.listStyle}>
                  <a href='#'>FAQs</a>
                </li>
                <li className={styleSheet.listStyle}>
                  <a href='#'>+234 903 211 8900</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styleSheet.socialSection}>
            <div>
              <h4 className={styleSheet.headingStyle}>Socials</h4>
            </div>
            <div>
              <ul className='inline-block'>
                <li className={styleSheet.socials}>
                  <a href='#'>
                    <img src='../../assets/images/x.svg' className={styleSheet.socialsIcon} />
                  </a>
                </li>
                <li className={styleSheet.socials}>
                  <a href='#'><img src='../../assets/images/instagram.svg' className={styleSheet.socialsIcon} /></a>
                </li>
                <li className={styleSheet.socials}>
                  <a href='#'><img src='../../assets/images/linkedin.svg' className={styleSheet.socialsIcon} /></a>
                </li>
              </ul>
            </div>
          </div>
        </Box>
        <Box className={styleSheet.copyrightSection}>
          <div className='text-white text-[8px] md:text-[16px]'>copyright &copy; swiftpaay, {currentYear} </div>
        </Box>
      </Box>

    </Box>
  );
};
export default Footer;