import React from 'react';
import useTitle from '../../../../hooks/useTitle';

const CancelSellerOrder = () => {
    useTitle('Seller Canceled Orders');
    return (
        <div>
            <h2 className="text-2xl">cancel seller order page</h2>
        </div>
    );
};

export default CancelSellerOrder;