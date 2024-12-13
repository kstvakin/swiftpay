import React from "react";
import useAppStyles from "../hooks/css";
import DashboardLayout from "../layouts/innerpage/dashboard";
import Box from "../components/Box";
import { DashBoardProvider } from "../context/dashboardContext";
import Navigation from "../features/dashboard/navigation";
import Activities from "../features/transactions/activities";
import SearchBar from "../features/recipients/search";
import List from "../features/recipients/list";

const RecipientsPage = (): React.JSX.Element => {
    const { appStyleSheet } = useAppStyles();
    return (
        <DashboardLayout title="Recipients" renderIcon={true}>
            <Box className="w-3/4 m-auto px-3">
                <DashBoardProvider>
                    <SearchBar />
                    <List />
                </DashBoardProvider>
            </Box>
        </DashboardLayout>
    );
};

export default RecipientsPage;