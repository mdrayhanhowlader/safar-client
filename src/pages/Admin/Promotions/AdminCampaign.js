import React, { useState } from 'react';
import AvailableCampaign from './AvailableCampaign';
import CreateCampaign from './CreateCampaign';
import OrganizerOnCampaign from './OrganizerOnCampaign';

const AdminCampaign = () => {
    const [show, setShow] = useState("available-campaign");

    return (
        <div>
            <div className="m-8">
                <h2>Campaign Management</h2>
                <div className="border-1 border-slate-600 m-2"></div>
                {/* nav */}
                <div className="w-full py-3 text-slate-700">
                    <ul className="flex justify-start gap-2">
                        <li
                            className={
                                show === "available-campaign"
                                    ? " p-2 cursor-pointer border-b-2 border-orange-400"
                                    : "p-2 cursor-pointer"
                            }
                            onClick={() => setShow("available-campaign")}
                        >
                            Available Campaign
                        </li>
                        <li
                            className={
                                show === "registered-campaign"
                                    ? " p-2 cursor-pointer border-b-2 border-orange-400 "
                                    : "p-2 cursor-pointer"
                            }
                            onClick={() => setShow("organizer-on-campaign")}
                        >
                            Organizer On Campaign
                        </li>
                        <li
                            className={
                                show === "create-campaign"
                                    ? " p-2 cursor-pointer border-b-2 border-orange-400 "
                                    : "p-2 cursor-pointer"
                            }
                            onClick={() => setShow("create-campaign")}
                        >
                            Create Campaign
                        </li>
                    </ul>
                </div>
                {/* campaign body */}
                <div className="p-2 border-2 border-slate-300">
                    {show === "available-campaign" && (
                        <AvailableCampaign />
                    )}
                    {show === "organizer-on-campaign" && (
                        <OrganizerOnCampaign />
                    )}
                    {show === "create-campaign" && (
                        <CreateCampaign />
                    )}

                </div>
            </div>
        </div>
    );
};

export default AdminCampaign;