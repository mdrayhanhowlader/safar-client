import React from 'react';
import useTitle from '../../../../hooks/useTitle';

const MessageToOrganizer = () => {
    useTitle('Org-Message');
    return (
        <div>
            <h2 className="text-2xl">Message to organizer page</h2>
        </div>
    );
};

export default MessageToOrganizer;