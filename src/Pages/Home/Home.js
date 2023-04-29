import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Contactus from './Contactus';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className=''>
            <Banner/>
            <Info/>
            <Services/>
            <MakeAppointment/>
            <Testimonials/>
            <Contactus/>
            <Footer/>
        </div>
    );
};

export default Home;