import React, { FC } from "react";
import Box from "../../../components/Box";
import { useNavigate } from "react-router-dom";
import { useDashBoardCss } from "../../../context/dashboardContext";

interface ComponentProps {
    title?: string;
    renderIcon?: boolean
}

const Header: FC<ComponentProps> = ({ title, renderIcon }) => {
    const { cssStyle } = useDashBoardCss();
    const navigate = useNavigate();
    const handleGoBack = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate(-1);
    }

    return (
        <Box className={cssStyle.dashboardHeader}>
            <div className="py-1 flex items-center justify-between">
                {renderIcon && (
                    <div className="flex items-center">
                        <span onClick={handleGoBack} className="px-5 cursor-pointer">
                            <img src="../../assets/images/arrow-back.svg" />
                        </span>
                    </div>
                )}
                <div>
                    <span className="text-[2.5rem] collor-[rgba(0, 0, 0, 1)] font-bold">{title}</span>
                </div>
                <div>
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