import React from 'react';

const Service = ({service}) => { 
    return (
<div className="card   shadow-xl lg:max-w-lg">
  <figure className="px-10 pt-10">
    <img src={service.img} alt="img" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{service.name}</h2>
    <p className=''>{service.description}</p>

  </div>
</div>
    );
};

export default Service;