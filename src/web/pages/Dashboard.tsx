import React from "react";
import useAppStyles from "../hooks/css";
import DashboardLayout from "../layouts/innerpage/dashboard";
import Box from "../components/Box";
import Rate from "../features/dashboard/rate";
import CurrentActivity from "../features/dashboard/current-activity";
import PrevActivity from "../features/dashboard/prev-activity";
import { DashBoardProvider } from "../context/dashboardContext";
import Navigation from "../features/dashboard/navigation";

const DashboardPage = (): React.JSX.Element => {
    const { appStyleSheet } = useAppStyles();
    return (
        <DashboardLayout title="Recent Activities">
            <Box className="w-3/4 m-auto">
                <Rate />
                <DashBoardProvider>
                    <CurrentActivity />
                    <PrevActivity />
                    <Navigation />
                </DashBoardProvider>
            </Box>
        </DashboardLayout>
    );
};

export default DashboardPage;