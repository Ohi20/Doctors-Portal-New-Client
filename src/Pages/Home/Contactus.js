import React from 'react';
import appointment from '../../assets/images/appointment.png';

const Contactus = () => {
    return (
        <section className='my-5'
        style={{
            background: `url(${appointment})`
        }} >
            <div className="">
                <div className='text-center mt-5 py-6'>
                    <h2 className='text-secondary font-bold text-xl'>Contact Us</h2>
                    <h3 className='text-4xl text-white'>Stay Connected With Us</h3>
                </div>
  <div className="hero-content flex-col lg:flex-row-reverse">

    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text"></span>
          </label>
          <input type="text" placeholder="Email Address" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"></span>
          </label>
          <input type="text" placeholder="Subject" className="input input-bordered" />

        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"></span>
          </label>
          <input className='p-12 border input input-bordered' type="text" placeholder="Your Message"  />

        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary text-white">Submit</button>
        </div>
      </div>
    </div>
  </div>
</div>
        </section>
    );
};

export default Contactus;