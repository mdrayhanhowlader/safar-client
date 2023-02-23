import React from 'react';
import useTitle from '../../hooks/useTitle';

const GuideProfile = () => {
    useTitle('Profile')
    return (
        <div>
            <h2 className="text-3xl font-semibold">Profile</h2>
        </div>
    );
};

export default GuideProfile;