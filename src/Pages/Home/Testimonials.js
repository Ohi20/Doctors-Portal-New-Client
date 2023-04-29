import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';

const Testimonials = () => {
    return (
        <section className='my-12'>
            <div className='flex justify-between'>
                <div>
                    <h2 className='text-primary font-bold text-xl'>Testimonial</h2>
                    <h3 className='text-2xl bannerHeader'>What Our Patients Says</h3>
                </div>
                <div>
                    <img className='' src={quote} width={200} height={200} alt=''></img>
                </div>
            </div>
            <div>
        
        <div className='grid grid-cols-3 lg:grid-cols-3 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1'>
        <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <p>If a dog chews shoes whose shoes does he choose?</p>
  </div>
  <img className="mask mask-circle" src={people1} width={100} height={100} alt=''/>
</div>

<div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <p>If a dog chews shoes whose shoes does he choose?</p>
  </div>
  <img className="mask mask-circle" src={people2} width={100} height={100} alt='' />
</div>

<div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <p>If a dog chews shoes whose shoes does he choose?</p>
  </div>
  <img className="mask mask-circle" src={people3} width={100} height={100} alt='' />
</div>
        </div>
            </div>
        </section>
    );
};

export default Testimonials;