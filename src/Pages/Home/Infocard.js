import React from 'react';

const Infocard = ({img , cardtitle, cardtext, bgClass}) => {
    return (
<div class={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
  <figure className='pl-5 '><img className='' src={img} alt="Album"/></figure>
  <div className="card-body text-white">
    <h2 className="card-title">{cardtitle}</h2>
    <p>{cardtext}</p>
  </div>
</div>
    );
};

export default Infocard;