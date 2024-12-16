import React from "react";
import DashboardLayout from "../layouts/innerpage/dashboard";
import Box from "../components/Box";
import { DashBoardProvider, useDashBoardCss } from "../context/dashboardContext";
import Activities from "../features/transactions/activities";

const SendMoneyPage = (): React.JSX.Element => {
    const { cssStyle } = useDashBoardCss();
    return (
        <DashBoardProvider>
            <DashboardLayout title="Send Money" renderIcon={true}>
                <Box className={cssStyle.mainSection}>
                    <div>send money</div>
                </Box>
            </DashboardLayout>
        </DashBoardProvider>
    );
};

export default SendMoneyPage;