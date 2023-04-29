import React from 'react';
import cavity from '../../assets/images/cavity.png';
import Service from './Service';
import fluoride from '../../assets/images/fluoride.png';
import whitening from '../../assets/images/whitening.png';
import treatment from '../../assets/images/treatment.png';
import PrimaryButton from '../Shared/PrimaryButton';


const Services = () => {

  const services = [
    {
      _id: 1,
      name: 'Fluoride Treatment',
      description: 'Fluoride is especially helpful if you’re at high risk of developing dental caries, or cavities.',
      img: fluoride
    },

    {
      _id: 2,
      name: 'Cavity Filling',
      description: 'Fillings treat tooth decay, preventing further damage and tooth loss',
      img: whitening
    },

    {
      _id: 3,
      name: 'Teeth Whitening',
      description: 'Everyone notices a bright, white, glowing smile.',
      img: cavity
    }

  ]
    return (
        <div className='my-28'>
            <div className='text-center'>
            <h3 className='text-primary  text-xl font-bold uppercase'>Our Services</h3>
            <h2 className='text-4xl'>Services We Provide</h2>
            </div>

            <div className='my-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>

              {
                services.map(service => <Service
                key= {service._id}
                service= {service}
                
                ></Service>)
              }

            </div>

            <div className='my-5 '>
            <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img src={treatment} className="max-w-sm rounded-lg shadow-2xl opacity-80" />
    <div className='lg:px-20'>
      <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
      <p className="py-6 text-accent text-xl">Specially designed for patients seeking dentistry abroad, we offer you bespoke expertise at a price that is unbelievably affordable. We have an elite team of carefully selected specialists from all fields of dentistry.</p>
      <PrimaryButton>Get Started</PrimaryButton>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default Services;