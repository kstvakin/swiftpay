import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import * as Menu from "../../../data/menu.json";
import { useAuth } from "../../../context/AuthContext";
import { useDashBoardCss } from "../../../context/dashboardContext";
const styleSheet = {
    'anchor': 'px-5 py-5 inline-block w-full nav-link space-x-2',
    imgWrapper: 'py-1 bg-white rounded-tl-[12px] rounded-tr-[12px] !mb-0',
    imgStyle: "h-full justify-self-center",
    linksContainer: "bg-[#4F914A] h-[85%]",
    ulLinks: "inline-block w-full text-white mt-10",
    logOutContainer: "bg-white h-[6%] flex w-full items-center drop-shadow-sidebar-boxshadow"
}
const data = Menu.data;
const Sidebar = (): React.JSX.Element => {
    const { cssStyle: appStyleSheet } = useDashBoardCss();;
    const location = useLocation();
    const { logout } = useAuth();

    const handleLogOut = () => {
        logout();
    }

    return (
        <div className="float-left w-[20%] h-full drop-shadow-sidebar-boxshadow">
            <div className={`${appStyleSheet.dashboardHeader} ${styleSheet.imgWrapper}`}>
                <img className={styleSheet.imgStyle} src="../../assets/images/small-logo.svg" />
            </div>
            <div className={styleSheet.linksContainer}>
                <ul className={styleSheet.ulLinks}>
                    {data.map((item, index) => (
                        <li key={index}>
                            <span>
                                <NavLink className={styleSheet.anchor} to={item.path}>
                                    <span className="float-left"><img src={`../../assets/images/${location.pathname !== item.path ? item.icon : item.icon + '-black'}.svg`} /></span>
                                    <span className="float-left">{item.name}</span>
                                </NavLink>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styleSheet.logOutContainer}>
                <div className="px-3 flex w-full space-x-2">
                    <span><img src="../../assets/images/logout-icon.svg" /></span>
                    <span>
                        <NavLink
                            className="text-[#FF0000]"
                            to="#" onClick={handleLogOut}>Log Out</NavLink>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;