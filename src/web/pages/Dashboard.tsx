import React from "react";
import DashboardLayout from "../layouts/innerpage/dashboard";
import Box from "../components/Box";
import Rate from "../features/dashboard/rate";
import CurrentActivity from "../features/dashboard/current-activity";
import PrevActivity from "../features/dashboard/prev-activity";
import { DashBoardProvider } from "../context/dashboardContext";
import Navigation from "../features/dashboard/navigation";

const DashboardPage = (): React.JSX.Element => {
    return (
        <DashBoardProvider>
            <DashboardLayout title="Recent Activities">
                <Box className="w-3/4 m-auto">
                    <Rate />
                    <CurrentActivity />
                    <PrevActivity />
                    <Navigation />
                </Box>
            </DashboardLayout>
        </DashBoardProvider>
    );
};

export default DashboardPage;