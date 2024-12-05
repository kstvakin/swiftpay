import React from 'react';
import { Text, View } from 'react-native';
import HomeLayout from '../layouts/landing/index';
import SectionOne from '../features/landing/SectionOne';
import SectionTwo from '../features/landing/SectionTwo';
import SectionThree from '../features/landing/SectionThree';
import '../styles/landing.css';
import SectionFour from '../features/landing/SectionFour';
import SectionFive from '../features/landing/SectionFive';
import SectionSix from '../features/landing/SectionSix';

const LandingPage = (): React.JSX.Element => {
  return (
    <HomeLayout>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
    </HomeLayout>
  );
};
export default LandingPage;
