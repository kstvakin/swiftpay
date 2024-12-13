import React, { FC } from "react";
import useAppStyles from "../../../hooks/css";
import Box from "../../../components/Box";
import { useNavigate } from "react-router-dom";

interface ComponentProps {
    title?: string;
    renderIcon?: boolean
}

const Header: FC<ComponentProps> = ({ title, renderIcon }) => {
    const { appStyleSheet } = useAppStyles();
    const navigate = useNavigate();

    return (
        <Box className={appStyleSheet.dashboardHeader}>
            <div className="py-1 flex items-center justify-between">
                <div className="flex items-center space-x-20">
                    <span onClick={() => navigate('/dashboard')} className="px-5">{renderIcon && <img src="../../assets/images/arrow-back.svg" />}</span>
                    <span className="text-[2.5rem] collor-[rgba(0, 0, 0, 1)] font-bold">{title}</span>
                </div>
                <div className="">
                    <div className="flex items-center space-x-5">
                        <div className="float-left">
                            <img className="h-[1.5rem]" src="../../../assets/images/bell-icon.svg" />
                        </div>
                        <div className="float-left">
                            <img className="h-[2.5rem]" src="../../../assets/images/avatar.svg" />
                        </div>
                    </div>
                </div>
            </div>
        </Box>
    );
};

export default Header;