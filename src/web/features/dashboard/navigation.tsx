import React from 'react';
import { FormButton } from '../../components/Form';
import { useNavigate } from 'react-router-dom';
const Navigation = (): React.JSX.Element => {
    const navigate = useNavigate();
    return (
        <div>
            <FormButton className='bg-[#4F914A] color-white px-12 py-3 rounded-full'
                title={'Send money'}
                type="button"
                onClick={() => navigate('/send-money')}
            />
        </div>
    )
}

export default Navigation;