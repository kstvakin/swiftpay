import React from 'react';
import InnerPageLayout from '../layouts/innerpage';
import SignInForm from '../features/SignIn';
import useAppStyles from '../hooks/css';



const SignInPage = (): React.JSX.Element => {
    const { appStyleSheet } = useAppStyles();
    return (
        <InnerPageLayout
            title="Sign in to your account"
            className={appStyleSheet.innerPageLayoutMargin}>
            <SignInForm />
        </InnerPageLayout>
    );
};

export default SignInPage;