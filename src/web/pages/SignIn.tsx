import React from 'react';
import InnerPageLayout from '../layouts/innerpage';
import SignInForm from '../features/SignIn';


const SignInPage = (): React.JSX.Element => {
    return (
        <InnerPageLayout
            title="Sign in to your account">
            <SignInForm />
        </InnerPageLayout>
    );
};

export default SignInPage;