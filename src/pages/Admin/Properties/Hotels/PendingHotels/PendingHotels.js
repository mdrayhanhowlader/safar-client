import React from 'react';
import useTitle from '../../../../../hooks/useTitle';

const PendingHotels = () => {
    useTitle('Pending Hotels')
    return (
        <div>
            <h2 className="text-2xl">Pending Hotels</h2>
        </div>
    );
};

export default PendingHotels;