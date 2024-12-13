import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import InnerPageLayout from '../layouts/innerpage';
import PersonalDetailsForm from '../features/SignUp/PersonalDetails';
import { AppDispatch, RootState } from '../store/store';
import CreatePasswordForm from '../features/SignUp/CreatePassword';
import { ConfirmPin, CreatePin } from '../features/SignUp/CreatePin';
import useAppStyles from '../hooks/css';
import { setLength } from '../features/SignUp/signUpSlice';



const SignUpPage = (): React.JSX.Element => {
    const count = useSelector((state: RootState) => state.signup.length);
    const { appStyleSheet } = useAppStyles();
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        if (count > 50) {
            dispatch(setLength())
        }
    }, [])

    const renderContent = () => {
        switch (count) {
            case 50:
                return (
                    <InnerPageLayout title="Create Password"
                        className={appStyleSheet.innerPageLayoutMargin}>
                        <CreatePasswordForm />
                    </InnerPageLayout>
                );
            case 75:
                return (
                    <InnerPageLayout title="Create Pin"
                        className={appStyleSheet.innerPageLayoutMargin}>
                        <CreatePin />
                    </InnerPageLayout>
                );
            case 100:
                return (
                    <InnerPageLayout title="Confirm Pin"
                        className={appStyleSheet.innerPageLayoutMargin}>
                        <ConfirmPin />
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