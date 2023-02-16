import React from 'react';
import useTitle from '../../../../hooks/useTitle';

const MessageToCustomer = () => {
    useTitle('Cust-Message');
    return (
        <div>
            <h2 className="text-2xl">Message to Customer page</h2>
        </div>
    );
};

export default MessageToCustomer;