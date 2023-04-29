import React from 'react';
import Infocard from './Infocard';
import clock1 from '../../assets/icons/clock1.png';
import marker1 from '../../assets/icons/marker1.png';
import phone1 from '../../assets/icons/phone1.png';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <Infocard cardtitle='Opening Hours' cardtext='Check Appointment' bgClass='' img={clock1}></Infocard>
            <Infocard cardtitle='Visit Our Location' cardtext='Dhanmondi,Dhaka' bgClass='' img={marker1}></Infocard>
            <Infocard cardtitle='Contact Us Now' cardtext='+88018xxxxxxxx' bgClass='' img={phone1}></Infocard>
        </div>
    );
};

export default Info;