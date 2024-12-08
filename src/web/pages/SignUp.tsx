import React from 'react';
import { useSelector } from "react-redux";
import InnerPageLayout from '../layouts/innerpage';
import PersonalDetailsForm from '../features/SignUp/PersonalDetails';
import { RootState } from '../store/store';



const SignUpPage = (): React.JSX.Element => {
    const count = useSelector((state: RootState) => state.signup.length);

    const renderContent = () => {
        switch (count) {
            case 50:
                return (
                    <InnerPageLayout title="Upload ID Card">
                        <PersonalDetailsForm />
                    </InnerPageLayout>
                );
            default:
                return (
                    <InnerPageLayout title="Create Account">
                        <PersonalDetailsForm />
                    </InnerPageLayout>
                );
        }
    };

    return <>{renderContent()}</>;
};

export default SignUpPage;