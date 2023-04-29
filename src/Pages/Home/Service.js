import React from 'react';
import '../Home/Service.css';


const Service = ({service}) => {

 
    return (
<div className="card w-96  shadow-xl lg:max-w-lg">
  <figure className="px-10 pt-10">
    <img src={service.img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title servicesText">{service.name}</h2>
    <p className='servicesText'>{service.description}</p>

  </div>
</div>
    );
};

export default Service;