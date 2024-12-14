import React, { CSSProperties, FC, ReactNode, useEffect, useState } from "react";
import { useApi } from "../hooks/endpoint-manager";
import { FormButton } from "./Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { AppStyleSheet } from "../utils/inteface";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

interface UseApiOptions<TBody> {
    method?: HttpMethod; // HTTP method (default: GET)
    body?: TBody; // Request body for POST/PUT
    headers?: Record<string, string>; // Optional headers
    params?: Record<string, any>; // Query parameters
}

interface PaginationProps {
    url: string;
    options?: UseApiOptions<any>
}

const styleSheet: AppStyleSheet = {
    buttonStyle: "float-left px-3 py-1 border-black border-solid border-[1px] rounded-3xl",
    indicator: "float-left rounded-[5px] text-white bg-[#009933] px-4 py-1",
    wrapper: "float-right flex space-x-2 mt-5"
}

const Pagination: FC<PaginationProps> = ({ url, options }) => {
    const { data, error, isLoading, callApi } = useApi();
    const [page, setPage] = useState<number>(1);

    useEffect(() => {
        callApi(url, options);
    }, [callApi]);

    console.log(isLoading);
    console.log(error);

    return (
        <div className={styleSheet.wrapper}>
            <button className={styleSheet.buttonStyle}
                type="button"
                disabled={page === 1 ? true : false}>
                <FontAwesomeIcon
                    icon={faChevronLeft}
                />
            </button>
            <div className={styleSheet.indicator}>{page}</div>
            <button className={styleSheet.buttonStyle}
                type="button">
                <FontAwesomeIcon
                    icon={faChevronRight}
                />
            </button>
        </div>
    );
};

export default Pagination;
