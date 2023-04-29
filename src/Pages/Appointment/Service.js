import React from 'react';

const Service = ({service, setTreatment}) => {
    const {name, slots} = service;
    return (
<div className="card lg:max-w-lg bg-base-100 shadow-xl">
  <div className="card-body text-center">
    <h2 className="card-title text-secondary font-bold justify-center">{name}</h2>
    <p>
        {
            slots.length ? <span>{slots[0]}</span> : <span className='text-red-500'>Try Another Date</span>
        }
    </p>
    <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>
    <div className="card-actions justify-center">
      <label 
      onClick={()=> setTreatment(service)} 
      disabled={slots.length === 0}  
      htmlFor="booking-modal" 
      className="btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary">Book Appointment</label>
    </div>
  </div>
</div>
    );
};

export default Service;