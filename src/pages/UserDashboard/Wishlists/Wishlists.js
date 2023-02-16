import React from 'react';
import useTitle from '../../../hooks/useTitle';
import WishListCard from "./WishListCard";
const Wishlists = () => {
    useTitle('Wishlist');
    return (
        <div className="container mx-auto">
            <h2 className="text-2xl my-8">Wishlists page</h2>
            <div className='w-full mx-auto grid md:grid-cols-3 lg:grid-cols-4 gap-4 px-4'>
              <WishListCard></WishListCard>
              <WishListCard></WishListCard>
              <WishListCard></WishListCard>
              <WishListCard></WishListCard>
            </div>
        </div>
    );
};

export default Wishlists;