import { format } from 'date-fns';
import React, {  useState } from 'react';
import Service from '../Appointment/Service';
import BookingModal from '../Appointment/BookingModal';
import Loading from '../Shared/Loading';
import { useQuery } from 'react-query';

const AvailableAppointment = ({date, setDate}) => {

    // For useEffect
    // const [services, setServices] = useState([]);

    const [treatment, setTreatment] = useState(null);
    const formatedDate = format(date, 'PP');

    const { isLoading, data: services , refetch } = useQuery(['available', formatedDate], () =>
    fetch(`http://localhost:5000/available?date=${formatedDate}`)
    .then(res =>res.json())
  )

    if(isLoading){
        return <Loading></Loading>
    }

    // For useEffect
    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${formatedDate}`)
    //     .then(res=> res.json())
    //     .then(data => setServices(data))
    // }, [formatedDate]);


    return (
        <div>
            <h4 className='text-xl text-secondary text-center'>Available Appointments On: {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <Service
                    key={service._id}
                    service={service}
                    setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModal
            treatment={treatment}
            date={date}
            setTreatment={setTreatment}
            refetch={refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;