import React, { useRef, useState } from "react";
import { TextComponent } from "../../components/Text";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faBellConcierge, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useDashBoardCss } from "../../context/dashboardContext";

const General = (): React.JSX.Element => {
    const { settingsStyle } = useDashBoardCss();
    const [isChecked, setIsChecked] = useState(false);
    const toggleRef = useRef<HTMLInputElement>(null);

    const handleToggle = () => {
        console.log(!isChecked)
        setIsChecked((prev) => !prev);
    };


    return (
        <div className={settingsStyle.container}>
            <div>
                <TextComponent className={settingsStyle.header}>
                    general
                </TextComponent>
            </div>
            <div className={settingsStyle.tile}>
                <div className={settingsStyle.anchorText}>
                    <span className="float-left">
                        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.60961 1.43594C5.72167 1.15898 5.91389 0.921786 6.16163 0.754773C6.40937 0.58776 6.70134 0.498535 7.00011 0.498535C7.29889 0.498535 7.59086 0.58776 7.8386 0.754773C8.08633 0.921786 8.27855 1.15898 8.39061 1.43594C9.49987 1.74062 10.4784 2.40118 11.1756 3.31609C11.8729 4.231 12.2504 5.34961 12.2501 6.49994V10.0227L13.6241 12.0837C13.6995 12.1966 13.7428 12.3279 13.7493 12.4636C13.7559 12.5992 13.7256 12.734 13.6615 12.8538C13.5975 12.9735 13.5021 13.0736 13.3856 13.1433C13.2691 13.2131 13.1359 13.25 13.0001 13.2499H9.59886C9.50856 13.8748 9.19616 14.4461 8.71889 14.8594C8.24162 15.2727 7.63143 15.5001 7.00011 15.5001C6.36879 15.5001 5.75861 15.2727 5.28134 14.8594C4.80407 14.4461 4.49166 13.8748 4.40136 13.2499H1.00011C0.86433 13.25 0.73109 13.2131 0.614606 13.1433C0.498122 13.0736 0.402764 12.9735 0.338707 12.8538C0.27465 12.734 0.244296 12.5992 0.250883 12.4636C0.257471 12.3279 0.300753 12.1966 0.376112 12.0837L1.75011 10.0227V6.49994C1.75011 4.08194 3.38511 2.04494 5.60961 1.43594ZM5.93961 13.2499C6.01707 13.4694 6.1607 13.6595 6.35071 13.7939C6.54071 13.9284 6.76773 14.0006 7.00049 14.0006C7.23324 14.0006 7.46027 13.9284 7.65027 13.7939C7.84027 13.6595 7.9839 13.4694 8.06136 13.2499H5.93961ZM7.00011 2.74994C6.00555 2.74994 5.05172 3.14503 4.34846 3.84829C3.6452 4.55155 3.25011 5.50538 3.25011 6.49994V10.2499C3.25015 10.3981 3.2063 10.5429 3.12411 10.6662L2.40186 11.7499H11.5976L10.8754 10.6662C10.7934 10.5428 10.7499 10.398 10.7501 10.2499V6.49994C10.7501 5.50538 10.355 4.55155 9.65176 3.84829C8.9485 3.14503 7.99467 2.74994 7.00011 2.74994Z" fill="#222222" />
                        </svg>
                    </span>
                    <span className="float-left">Recieve notifications about discounts and product updates</span>
                </div>
                <div>
                    <div className="relative inline-block w-12 h-6">
                        <input
                            type="checkbox"
                            id="toggle"
                            className="cursor-pointer absolute top-0 h-full w-full opacity-[0.01] z-20"
                            checked={isChecked}
                            onChange={handleToggle} />
                        <label
                            className={`block w-full h-full rounded-full transition duration-300 ${isChecked ? "bg-green-500" : "bg-gray-300"}`}
                        ></label>
                        <span
                            className={`absolute z-10 top-1 left-1 w-4 h-4 bg-white rounded-full shadow-md transition-transform duration-300 ${isChecked ? "translate-x-6" : "translate-x-0"}`}></span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default General;