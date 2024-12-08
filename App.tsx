import React from 'react';
import "./global.css";
import "./public/assets/css/tailwind.css";
import LandingPage from './src/web/pages/Landing';
import { HashRouter as Router, BrowserRouter, Route, Routes } from 'react-router-dom';
import { Platform } from 'react-native';
import SignUpPage from './src/web/pages/SignUp';
import { store } from './src/web/store/store';
import { Provider } from 'react-redux';
import SignInPage from './src/web/pages/SignIn';

const WebRouter = (): React.JSX.Element => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

const PlatformRouter = (os: string): React.JSX.Element => {
  let screen;
  switch (os) {
    case 'web':
      screen = <WebRouter />;
      break;
    default:
      screen = <WebRouter />
  }
  return screen;
}

const App = (): React.JSX.Element => {
  const os = Platform.OS;
  return PlatformRouter(os);
};
export default App;
