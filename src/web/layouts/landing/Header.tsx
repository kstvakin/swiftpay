import React, { FC, forwardRef, useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
} from 'react-native';
import Box from '../../components/Box';
import { Link, NavLink } from 'react-router-dom';

interface StyleSheet {
  [key: string]: string
}

const styleSheet: StyleSheet = {
  'sectionWrapper': 'bg-white relative',
  'links': 'float-left p-3',
  'linksNoPadding': 'float-left px-3',
  'roundedLinks': 'px-[3.1875rem] py-[1.125rem] color-white rounded-full md:text-[0.5625rem] xl:text-[1.125rem] font-semibold',
  'logoContainer': 'md:w-[20%] xl:w-[30%]',
  'container': 'mx-8 pt-5',
  'linksContainer': 'md:w-[80%] xl:w-[70%] hidden lg:flex items-center text-[16px]',
  'ulWrapper': 'w-[45%]',
  'mobileMenuWrapper': 'bg-white fixed top-0 right-0 min-w-[45%] h-[100vh] z-10',
  'mobileMenuContainer': 'inline-block w-full mt-5',
  'mobileMenuLinks': 'pl-5 py-3 inline-block w-full color-[#141E46]',
  'fontSize': 'text-[0.8rem]/[0.9375rem] xl:text-[1rem]/[1.171875rem]'
};

const MobileMenu = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className={styleSheet.mobileMenuWrapper}>
      <ul className={styleSheet.mobileMenuContainer}>
        <li><NavLink className={styleSheet.mobileMenuLinks} to='#'>Language</NavLink></li>
        <li><NavLink className={styleSheet.mobileMenuLinks} to='#'>FAQs</NavLink></li>
        <li><NavLink className={styleSheet.mobileMenuLinks} to='#'>About Us</NavLink></li>
        <li><NavLink className={styleSheet.mobileMenuLinks} to='#'>Contact Us</NavLink></li>
        <li><NavLink className={styleSheet.mobileMenuLinks} to='/sign-in'>Log In</NavLink></li>
        <li><NavLink className={styleSheet.mobileMenuLinks} to='/sign-up'>Sign Up</NavLink></li>
      </ul>
    </div>
  )
});



const Header = (): React.JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsVisible(false);
    }
  };

  const handleMenuClick = () => setIsVisible(true);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Box className={styleSheet.sectionWrapper}>
      <div className={styleSheet.container}>
        <div className='flex items-center'>
          <div className={styleSheet.logoContainer}>
            <img src='../../assets/images/logo.png' alt='swiftpaay' />
          </div>
          <div className={styleSheet.linksContainer}>
            <div className={styleSheet.ulWrapper}>
              <ul className='inline-block'>
                <li className={styleSheet.links}><Link className={styleSheet.fontSize} to='#'>Language</Link></li>
                <li className={styleSheet.links}><Link className={styleSheet.fontSize} to='#'>FAQs</Link></li>
                <li className={styleSheet.links}><Link className={styleSheet.fontSize} to='#'>About Us</Link></li>
                <li className={styleSheet.links}><Link className={styleSheet.fontSize} to='#'>Contact Us</Link></li>
              </ul>
            </div>
            <div className='w-[55%]'>
              <ul className='inline-block float-right'>
                <li className={styleSheet.linksNoPadding}>
                  <NavLink className={`${styleSheet.roundedLinks} bg-[#141E46]`} to='/sign-in'>Log In</NavLink>
                </li>
                <li className={styleSheet.linksNoPadding}>
                  <NavLink className={`${styleSheet.roundedLinks} bg-[#41B06E]`} to='/sign-up'>Sign Up</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className='w-[80%] block lg:hidden'>
            <div className='float-right' onClick={handleMenuClick}>
              <div className="menu-icon">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isVisible && (<MobileMenu ref={ref} />)}
    </Box>
  );
};
export default Header;