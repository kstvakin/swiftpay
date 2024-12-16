import React from "react";
import DashboardLayout from "../layouts/innerpage/dashboard";
import Box from "../components/Box";
import { DashBoardProvider, useDashBoardCss } from "../context/dashboardContext";
import SetLimit from "../features/setlimit";

const SetLimitPage = (): React.JSX.Element => {
    const { cssStyle } = useDashBoardCss();
    return (
        <DashBoardProvider>
            <DashboardLayout title="Account Limit" renderIcon={true}>
                <Box className={cssStyle.mainSection}>
                    <SetLimit />
                </Box>
            </DashboardLayout>
        </DashBoardProvider>
    );
};

export default SetLimitPage;