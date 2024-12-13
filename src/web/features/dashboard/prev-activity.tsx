import React from 'react';
import { TextComponent } from '../../components/Text';
import Box from '../../components/Box';
import * as records from "../../data/transactions.json";
import { formatNumberWithCommas } from '../../lib/app-util';
import { useDashBoardCss } from '../../context/dashboardContext';

const data = records.data;

const getPreviousMonth = () => {
    const date = new Date();
    date.setMonth(date.getMonth() - 1);
    const options: Intl.DateTimeFormatOptions = { month: "long", year: "numeric" };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(new Date());
    return date.toLocaleDateString('en-US', options);
}


const PrevActivity = (): React.JSX.Element => {

    const { cssStyle } = useDashBoardCss();

    return (
        <Box className={cssStyle.container}>
            <TextComponent className={cssStyle.title}>{getPreviousMonth()}</TextComponent>
            {data && data.map((item, index) => (
                <Box className={item.status === 'failed' ? `${cssStyle.txnContainer} !text-faded` : cssStyle.txnContainer}
                    key={index}>
                    <Box className={cssStyle.txnItemContainer}>
                        <Box>
                            {
                                item.type && String(item.type).toLowerCase() === "account" ?
                                    (<img className={cssStyle.dashIconSize}
                                        src='../../assets/images/bank-icon.svg' />) :
                                    (<img className={cssStyle.dashIconSize}
                                        src='../../assets/images/wallet-icon.svg' />)
                            }
                        </Box>
                        <Box>
                            <TextComponent className={cssStyle.name}>{item.name}</TextComponent>
                            <TextComponent className={item.status === 'failed' ? `${cssStyle.destination} !text-faded-two` : cssStyle.destination}
                            >
                                To {item.type} {item.accountId}
                            </TextComponent>
                        </Box>
                    </Box>
                    <Box>
                        <Box>
                            <TextComponent className={item.status === 'failed' ? `${cssStyle.price} line-through decoration-solid` : cssStyle.price}
                            >{formatNumberWithCommas(item.amt)} {item.currency}</TextComponent>
                            <Box className='inline-block w-full relative'>
                                {
                                    item.status && String(item.status).toLowerCase() === "successful" &&
                                    <img className={`${cssStyle.dashIconSize} float-right`}
                                        src='../../assets/images/check.svg' />
                                }
                                {
                                    item.status && String(item.status).toLowerCase() === "failed" &&
                                    <img className={`${cssStyle.dashIconSize} float-right`}
                                        src='../../assets/images/failed.svg' />
                                }
                                {
                                    item.status && String(item.status).toLowerCase() === "pending" &&
                                    <img className={`${cssStyle.dashIconSize} float-right`}
                                        src='../../assets/images/check.svg' />
                                }


                            </Box>

                        </Box>
                    </Box>
                </Box>
            ))}
        </Box>
    )

}

export default PrevActivity;