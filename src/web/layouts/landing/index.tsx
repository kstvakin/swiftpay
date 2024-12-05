import React from 'react';
import type { PropsWithChildren } from 'react';
import Header from './Header';
import Footer from './Footer';
import { View } from 'react-native';
import { LandingPageProvider } from '../../context/LandingPageContext';
type SectionProps = PropsWithChildren<{}>;

const HomeLayout = ({ children }: SectionProps): React.JSX.Element => {
  return (
    <View>
      <Header />
      <LandingPageProvider>{children}</LandingPageProvider>
      <Footer />
    </View>
  );
};
export default HomeLayout;
