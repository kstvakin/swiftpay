import React from 'react';
import InnerPageLayout from '../layouts/innerpage';
import SignInForm from '../features/SignIn';



const SignInPage = (): React.JSX.Element => {
    return (
        <InnerPageLayout
            title="Sign in to your account"
            className="lg:mb-[20rem] mb-[6.25rem]">
            <SignInForm />
        </InnerPageLayout>
    );
};

export default SignInPage;