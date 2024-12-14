import React from "react";
import useAppStyles from "../hooks/css";
import DashboardLayout from "../layouts/innerpage/dashboard";
import Box from "../components/Box";
import { DashBoardProvider } from "../context/dashboardContext";
import SupportHeader from "../features/support/header";
import SupportForm from "../features/support/form";

const SupportPage = (): React.JSX.Element => {
    const { appStyleSheet } = useAppStyles();
    return (
        <DashboardLayout title="Support" renderIcon={true}>
            <Box className="w-3/4 m-auto px-3">
                <DashBoardProvider>
                    <SupportHeader />
                    <SupportForm />
                </DashBoardProvider>
            </Box>
        </DashboardLayout>
    );
};

export default SupportPage;