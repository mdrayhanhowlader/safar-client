import React from 'react';
import useTitle from '../../../../hooks/useTitle';

const Editors = () => {
    useTitle('Edit Users');
    return (
        <div>
           <h2 className="text-2xl">all users </h2> 
        </div>
    );
};

export default Editors;