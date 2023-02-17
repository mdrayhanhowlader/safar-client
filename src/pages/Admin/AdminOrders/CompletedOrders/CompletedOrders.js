import React from 'react';
import useTitle from '../../../../hooks/useTitle';

const CompletedOrders = () => {
    useTitle('Completed Orders');
    return (
        <div>
            <h2 className="text-2xl">Completed Orders</h2>
        </div>
    );
};

export default CompletedOrders;