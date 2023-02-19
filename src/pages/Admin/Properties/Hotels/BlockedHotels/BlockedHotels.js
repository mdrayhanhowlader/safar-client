import React from 'react';
import useTitle from '../../../../../hooks/useTitle';

const BlockedHotels = () => {
    useTitle('Blocked Hotels');
    return (
        <div>
            <h2 className="text-2xl">Blocked Hotels</h2>
        </div>
    );
};

export default BlockedHotels;