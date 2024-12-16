import React from "react";
import DashboardLayout from "../layouts/innerpage/dashboard";
import Box from "../components/Box";
import { DashBoardProvider, useDashBoardCss } from "../context/dashboardContext";
import Navigation from "../features/dashboard/navigation";
import Activities from "../features/transactions/activities";
import SearchBar from "../features/transactions/search";
import Pagination from "../components/pagination";

const TransactionHistoryPage = (): React.JSX.Element => {
    const { cssStyle } = useDashBoardCss();
    return (
        <DashBoardProvider>
            <DashboardLayout title="Transactions" renderIcon={true}>
                <Box className={cssStyle.mainSection}>
                    <SearchBar />
                    <Activities />
                    <Pagination
                        url="https://jsonplaceholder.typicode.com/users"
                    />
                </Box>
            </DashboardLayout>
        </DashBoardProvider>
    );
};

export default TransactionHistoryPage;