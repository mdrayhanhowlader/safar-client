import React from 'react';
import useTitle from '../../../../hooks/useTitle';

const AllOrders = () => {
    useTitle('All Orders');
    return (
        <div>
            <h2 className="text-2xl">All order page</h2>
        </div>
    );
};

export default AllOrders;