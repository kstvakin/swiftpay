import React from 'react';
import InnerPageLayout from '../layouts/innerpage';
import SignUpForm from '../features/SignUp';



const SignUpPage = (): React.JSX.Element => {
    return (
        <InnerPageLayout title='Create Account'>
            <SignUpForm />
        </InnerPageLayout>
    )
}

export default SignUpPage;