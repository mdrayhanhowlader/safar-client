import React from 'react';
import useTitle from '../../../../hooks/useTitle';

const AllAdmin = () => {
    useTitle('All Admin');
    return (
        <div>
            <h2 className="text-2xl">All Admin section</h2>
        </div>
    );
};

export default AllAdmin;