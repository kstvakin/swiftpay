import React from "react";
import { TextComponent } from "../../components/Text";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useDashBoardCss } from "../../context/dashboardContext";

const ChangePin = (): React.JSX.Element => {
    const { settingsStyle } = useDashBoardCss();
    return (
        <div className={settingsStyle.container}>
            <div>
                <TextComponent className={settingsStyle.header}>
                    security
                </TextComponent>
            </div>
            <NavLink to="/change-pin" className={settingsStyle.tile}>
                <div className={settingsStyle.anchorText}>Change my PIN</div>
                <FontAwesomeIcon icon={faChevronRight} />
            </NavLink>
        </div>
    )
};

export default ChangePin;