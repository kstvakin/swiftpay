import React from "react";
import DashboardLayout from "../layouts/innerpage/dashboard";
import Box from "../components/Box";
import { DashBoardProvider, useDashBoardCss } from "../context/dashboardContext";
import SetLimit from "../features/settings/SetLimit";
import ChangePin from "../features/settings/ChangePin";
import General from "../features/settings/General";

const SettingsPage = (): React.JSX.Element => {
    const { cssStyle } = useDashBoardCss();
    return (
        <DashboardLayout title="Settings" renderIcon={true}>
            <Box className={cssStyle.mainSection}>
                <DashBoardProvider>
                    <SetLimit />
                    <ChangePin />
                    <General />
                </DashBoardProvider>
            </Box>
        </DashboardLayout>
    );
};

export default SettingsPage;