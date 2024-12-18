import React from "react";
import DashboardLayout from "../layouts/innerpage/dashboard";
import Box from "../components/Box";
import { DashBoardProvider, useDashBoardCss } from "../context/dashboardContext";
import SupportHeader from "../features/support/header";
import SupportForm from "../features/support/form";

const SupportPage = (): React.JSX.Element => {
    const { cssStyle } = useDashBoardCss();
    return (
        <DashBoardProvider>
            <DashboardLayout title="Support" renderIcon={true}>
                <Box className={cssStyle.mainSection}>
                    <SupportHeader />
                    <SupportForm />
                </Box>
            </DashboardLayout>
        </DashBoardProvider>
    );
};

export default SupportPage;