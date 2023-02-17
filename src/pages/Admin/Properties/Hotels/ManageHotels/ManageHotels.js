import React from 'react';
import useTitle from '../../../../../hooks/useTitle';

const ManageHotels = () => {
    useTitle('Manage Hotels')
    return (
        <div>
            <h2 className="text-2xl">Manage hotel page</h2>
        </div>
    );
};

export default ManageHotels;