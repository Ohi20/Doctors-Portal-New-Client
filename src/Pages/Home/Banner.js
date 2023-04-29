import React from 'react';
import chair from '../../assets/images/chair.png';
import PrimaryButton from '../Shared/PrimaryButton';
import '../Home/Banner.css';

const Banner = () => {
    return (
        <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} className="max-w-sm rounded-lg shadow-2xl opacity-80" />
    <div className='lg:px-20'>
      <h1 className="text-5xl font-bold bannerHeader">Your New Smile Starts Here</h1>
      <p className="py-6 text-primary text-xl">Find Doctors Near You.
Check your local hospital's opening times,services and facilities, performance measures, reviews, and ratings.</p>
      <PrimaryButton>Get Started</PrimaryButton>
    </div>
  </div>
</div>
    );
};

export default Banner;