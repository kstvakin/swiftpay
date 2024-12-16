import React from 'react';
import { useDashBoardCss } from '../../context/dashboardContext';
import { TextComponent } from '../../components/Text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import { FormButton } from '../../components/Form';
const SetLimit = (): React.JSX.Element => {
    const { settingsStyle, cssStyle } = useDashBoardCss();
    return (
        <div className={settingsStyle.container}>
            <div>
                <TextComponent className={settingsStyle.header}>
                    security
                </TextComponent>
            </div>
            <div className={settingsStyle.tile}>
                <div className={settingsStyle.anchorText}>Increase account limit</div>
                <div className='space-x-1'>
                    <span><FontAwesomeIcon icon={faAward} /></span>
                    <span>Tier 1</span>
                </div>
            </div>
            <TextComponent className='text-[#009933] text-[1rem]'>Your SwiftPaay account is currently at Tier 1, offering you basic access to our services. Below are the transaction limits for this tier:</TextComponent>

            <TextComponent>Transaction Limits:</TextComponent>
            <ul className="list-disc list-inside space-y-2">
                <li>Maximum Transfer Amount (Per Transaction): $500</li>
                <li>Daily Transfer Limit: $1,000</li>
                <li>Monthly Transfer Limit: $5,000</li>
            </ul>
            <TextComponent>Upgrade to increase your limit</TextComponent>

            <FormButton className={`${cssStyle.button} block mt-10`}
                title={'Apply to tier 2'}
                type={'button'} />
        </div>
    )
}

export default SetLimit;