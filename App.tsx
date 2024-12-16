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
import DashboardPage from './src/web/pages/Dashboard';
import PrivateRoute from './src/web/components/Protected';
import { AuthProvider } from './src/web/context/AuthContext';
import TransactionHistoryPage from './src/web/pages/Transactions';
import SendMoneyPage from './src/web/pages/SendMoney';
import RecipientsPage from './src/web/pages/Recipients';
import SupportPage from './src/web/pages/Support';
import SettingsPage from './src/web/pages/Settings';
import SetLimitPage from './src/web/pages/SetLimit';
import ChangePinPage from './src/web/pages/ChangePin';

const WebRouter = (): React.JSX.Element => {
  return (
    <Provider store={store}>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path='/dashboard' element={
              <PrivateRoute>
                <DashboardPage />
              </PrivateRoute>
            } />
            <Route path='/send-money' element={
              <PrivateRoute>
                <SendMoneyPage />
              </PrivateRoute>
            } />
            <Route path='/transactions' element={
              <PrivateRoute>
                <TransactionHistoryPage />
              </PrivateRoute>
            } />
            <Route path='/recipients' element={
              <PrivateRoute>
                <RecipientsPage />
              </PrivateRoute>
            } />
            <Route path='/support' element={
              <PrivateRoute>
                <SupportPage />
              </PrivateRoute>
            } />
            <Route path='/settings' element={
              <PrivateRoute>
                <SettingsPage />
              </PrivateRoute>
            } />
            <Route path='/set-limit' element={
              <PrivateRoute>
                <SetLimitPage />
              </PrivateRoute>
            } />
            <Route path='/change-pin' element={
              <PrivateRoute>
                <ChangePinPage />
              </PrivateRoute>
            } />
          </Routes>
        </AuthProvider>
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
