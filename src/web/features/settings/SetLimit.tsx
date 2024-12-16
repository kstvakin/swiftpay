import React from "react";
import { TextComponent } from "../../components/Text";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useDashBoardCss } from "../../context/dashboardContext";

const SetLimit = (): React.JSX.Element => {
    const { settingsStyle } = useDashBoardCss();
    return (
        <div className={`${settingsStyle.container}`}>
            <div>
                <TextComponent className={settingsStyle.header}>
                    Account Settings
                </TextComponent>
            </div>
            <NavLink to="/set-limit" className={settingsStyle.tile}>
                <div className={settingsStyle.anchorText}>Account Limits</div>
                <FontAwesomeIcon icon={faChevronRight} />
            </NavLink>
        </div>
    )
};

export default SetLimit;