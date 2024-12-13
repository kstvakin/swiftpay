import React from "react";
import useAppStyles from "../../../hooks/css";
import { NavLink, useLocation } from "react-router-dom";
import * as Menu from "../../../data/menu.json";
import { useAuth } from "../../../context/AuthContext";
const styleSheet = {
    'anchor': 'px-5 py-5 inline-block w-full nav-link space-x-2'
}
const data = Menu.data;
const Sidebar = (): React.JSX.Element => {
    const { appStyleSheet } = useAppStyles();
    const location = useLocation();
    const { logout } = useAuth();

    const handleLogOut = () => {
        logout();
    }

    return (
        <div className="float-left w-[20%] h-full drop-shadow-sidebar-boxshadow">
            <div className={`${appStyleSheet.dashboardHeader} py-1 bg-white rounded-tl-[12px] rounded-tr-[12px]`}>
                <img className="h-full justify-self-center" src="../../assets/images/small-logo.svg" />
            </div>
            <div className="bg-[#4F914A] h-[85%]">
                <ul className="inline-block w-full text-white mt-10">
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
            <div className="bg-white h-[6%] flex w-full items-center drop-shadow-sidebar-boxshadow">
                <div className=" px-3 flex w-full space-x-2">
                    <span><img src="../../assets/images/logout-icon.svg" /></span>
                    <span><NavLink
                        className="text-[#FF0000]"
                        to="#" onClick={handleLogOut}>Log Out</NavLink>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;