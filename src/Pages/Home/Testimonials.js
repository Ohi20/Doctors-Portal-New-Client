import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from './Review';


const Testimonial = () => {

    const reviews = [
        {
            _id: 1, 
            name: 'Winson Herry',
            img: people1,
            review: 'Good doctor. He is very simple and gentle in his behavior. He will give sufficient time to each patient. He studies the patient and disease meticulously. We can freely interact with the doctor. He prefers surgery when it is very much required only. I never found commercial nature in him.',
            location: 'California'
        },
        {
            _id: 2, 
            name: 'Luna Modale',
            img: people2,
            review: 'He is very supportive and suggest well. Good surgeon known from past 10 years. My mother was a renal transplant patient but in most risky condition he treated her in day care procedure and avoided hospital admission .Apollo is really fortunate to have a good surgeon like him. We cannot imagine our life with out him.',
            location: 'Dhaka'
        },
        {
            _id: 3, 
            name: 'Sabrina Carpentar',
            img: people3,
            review: 'Very pleased with the doctor. He is caring, empathetic and most importantly you get to establish a connection with the Doctor; which I feel is seldom today. One of he best doctors I have met',
            location: 'Chittagong'
        },
    ]

    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary font-bold">Testimonial</h4>
                    <h2 className="text-4xl">What Our Patients Says</h2>
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </figure>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review =><Review
                        key={review._id}
                        review={review}
                    >
                    </Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;