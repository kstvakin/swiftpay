import React from "react";
import DashboardLayout from "../layouts/innerpage/dashboard";
import Box from "../components/Box";
import { DashBoardProvider } from "../context/dashboardContext";
import ChangePin from "../features/changepin";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import { ConfirmPin } from "../features/changepin/confirmpin";

const ChangePinPage = (): React.JSX.Element => {
    const screen = useSelector((state: RootState) => state.pin.pinCreationScreen);
    return (
        <DashBoardProvider>
            <DashboardLayout title="Change Pin" renderIcon={true}>
                <Box className="w-3/4 m-auto px-3">
                    {screen === 1 && (<ChangePin />)}
                    {screen === 2 && (<ConfirmPin />)}
                </Box>
            </DashboardLayout>
        </DashBoardProvider>
    );
};

export default ChangePinPage;