import React from 'react';
import img from '../../../assets/bannerImg.png';

const Banner = () => {
    return (
    <div className='relative h-screen'>
        <img src={img} className="brightness-50 h-screen w-screen" alt="" />
        <div className='class="prose prose-xl lg:absolute top-60 left-60 absolute text-white'>
            <h1 className='font-bold'>Find your next stay</h1>
            <p className=''>Search deals on hotels, homes, and much more...</p>
            <div className='flex'>
            <div className="space-y-1 text-sm mr-2">
			<label for="username" className="block dark:text-gray-400"></label>
			<input type="text" name="username" id="username" placeholder="Location" className="w-full px-4 py-3 rounded-md dark:border-gray-700  dark:text-gray-100 focus:dark:border-violet-400" />
		</div>
        <div className="space-y-1 text-sm mr-2">
			<label for="username" className="block dark:text-gray-400"></label>
			<input type="text" name="username" id="username" placeholder="Date" className="w-full px-4 py-3 rounded-md dark:border-gray-700  dark:text-gray-100 focus:dark:border-violet-400" />
		</div> 
        <div className="space-y-1 text-sm mr-2">
			<label for="username" className="block dark:text-gray-400"></label>
			<input type="text" name="username" id="username" placeholder="Price Range" className="w-full px-4 py-3 rounded-md dark:border-gray-700  dark:text-gray-100 focus:dark:border-violet-400" />
		</div> 
            </div>
        </div>
    </div>
    );
};

export default Banner;