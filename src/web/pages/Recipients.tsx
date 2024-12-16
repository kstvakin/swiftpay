import React from "react";
import DashboardLayout from "../layouts/innerpage/dashboard";
import Box from "../components/Box";
import { DashBoardProvider, useDashBoardCss } from "../context/dashboardContext";
import SearchBar from "../features/recipients/search";
import List from "../features/recipients/list";
import Pagination from "../components/pagination";

const RecipientsPage = (): React.JSX.Element => {
    const { cssStyle } = useDashBoardCss();
    return (
        <DashBoardProvider>
            <DashboardLayout title="Recipients" renderIcon={true}>
                <Box className={cssStyle.mainSection}>
                    <SearchBar />
                    <List />
                    <Pagination
                        url="https://jsonplaceholder.typicode.com/users"
                    />
                </Box>
            </DashboardLayout>
        </DashBoardProvider>
    );
};

export default RecipientsPage;