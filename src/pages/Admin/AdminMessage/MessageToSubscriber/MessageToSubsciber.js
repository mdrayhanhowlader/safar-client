import React from 'react';
import useTitle from '../../../../hooks/useTitle';

const MessageToSubscriber = () => {
    useTitle('Subs-Message');
    return (
        <div>
            <h2 className="text-2xl">Message to subscriber page</h2>
        </div>
    );
};

export default MessageToSubscriber;