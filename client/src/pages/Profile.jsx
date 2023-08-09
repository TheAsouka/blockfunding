import React, { useState, useEffect } from 'react'
import { useStateContext } from '../context'

import { DisplayCampaigns } from "../components";

import { thirdweb } from '../assets';

const Profile = () => {
    const [isLoading, setisLoading] = useState(false);
    const [campaigns, setCampaigns] = useState([]);

    const { address, contract, getUserCampaigns } = useStateContext();

    //Not possible to call an async function in useEffect directly (can't await)
    const fetchCampaigns = async () => {
        setisLoading(true);
        const data = await getUserCampaigns();
        setCampaigns(data);
        setisLoading(false);
    }

    useEffect(() => {
        if (contract) fetchCampaigns();
    }, [address, contract]);

    return (
        <div>
            <div className="mt-[60px] flex lg:flex-row flex-col gap-5">
                <div className="flex-[2] flex flex-col gap-[40px]">
                    <div className='mb-[20px]'>
                        <h4 className="font-epilogue font-semibold text-[18px] text-white">Your account</h4>
                        <div className="mt-[20px] flex flex-row items-center flex-wrap gap-[14px]">
                            <div className="w-[52px] h-[52px] flex items-center justify-center rounded-full bg-[#2c2f32] cursor-pointer">
                                <img src={thirdweb} alt="user" className="w-[60%] h-[60%] object-contain" />
                            </div>
                            <div>
                                <h4 className="font-epilogue font-semibold text-[14px] text-white break-all">{address}</h4>
                                {/* Number of campaigns hardcoded */}
                                <p className="mt-[4px] font-epilogue font-normal text-[12px] text-[#808191]">10 Campaigns</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DisplayCampaigns
                title="Your Campaigns"
                isLoading={isLoading}
                campaigns={campaigns}
            />
        </div>
    )
}

export default Profile