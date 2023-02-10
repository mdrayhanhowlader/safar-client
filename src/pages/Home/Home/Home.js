import React from 'react';
import Grid from '../../../Grid';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import Destination from '../Destination/Destination';
import Offers from '../Offers/Offers';
import Properties from '../Properties/Properties';
import TopRated from '../TopRated/TopRated';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Offers></Offers>
            <Destination></Destination>
            <TopRated></TopRated>
            <Properties></Properties>
            <Grid></Grid>
            <Footer></Footer>
        </div>
    );
};

export default Home;