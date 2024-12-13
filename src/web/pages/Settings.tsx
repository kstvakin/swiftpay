import React from "react";
import useAppStyles from "../hooks/css";
import DashboardLayout from "../layouts/innerpage/dashboard";
import Box from "../components/Box";
import { DashBoardProvider } from "../context/dashboardContext";
import Navigation from "../features/dashboard/navigation";
import Activities from "../features/transactions/activities";

const SettingsPage = (): React.JSX.Element => {
    const { appStyleSheet } = useAppStyles();
    return (
        <DashboardLayout title="Settings" renderIcon={true}>
            <Box className="w-3/4 m-auto px-3">
                <DashBoardProvider>
                    <div>send money</div>
                    {/* <Activities /> */}
                    {/* <Navigation /> */}
                </DashBoardProvider>
            </Box>
        </DashboardLayout>
    );
};

export default SettingsPage;