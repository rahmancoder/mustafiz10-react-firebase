import React from 'react';
import BannerBackground from '../BannerBackground/BannerBackground';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>

            <h1 className="text-danger text-center"> HealthCare Online Supoort 24 Hours Open</h1>
            <BannerBackground></BannerBackground>
            <Services></Services>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;