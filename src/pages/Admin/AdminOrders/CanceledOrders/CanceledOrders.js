import React from 'react';
import useTitle from '../../../../hooks/useTitle';

const CanceledOrders = () => {
    useTitle('Canceled Orders');
    return (
        <div>
            <h2 className="text-2xl">Canceled Orders</h2>
        </div>
    );
};

export default CanceledOrders;