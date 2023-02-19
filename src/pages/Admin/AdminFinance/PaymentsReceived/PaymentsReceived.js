import React from 'react';
import useTitle from '../../../../hooks/useTitle';

const PaymentsReceived = () => {
    useTitle('Payment Received');
    return (
        <div>
            <h2 className="text-2xl">Payment received page</h2>
        </div>
    );
};

export default PaymentsReceived;