import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const AddDoctor = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();

  const { data: services, isLoading } = useQuery('services', () => fetch('http://localhost:5000/service').then(res => res.json()))

  const imageStorageKey = '9445e49ff128e7fceb97d94d94c09ced';

  // 3 ways to store images
  // 1.3rd party storage/ free use for practice
  // 2.Your own storage on your own server (file system)
  // 3.Databse: mongodb. 
  // Yup: to validate file. search google: yup file validation for react-hook-form

  const onSubmit = async data => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url,{
      method: 'POST',
      body: formData
    })
    .then(res=>res.json())
    .then(result => {
      if(result.success){
        const img = result.data.url;
      }
      console.log('imagebb',result);
    })
    

  }

  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <div>
      <h2 className='text-2xl'>Add a New Doctor</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>

          </label>
          <input type="text"
            placeholder="Your Name"
            className="input input-bordered w-full max-w-xs"
            {...register("name", {
              required: {
                value: true,
                message: 'Name Required'
              },
            })
            }
          />
          <label className="label">
            {errors.name?.type === 'required' && <p className="label-text-alt text-red-500">{errors.name.message}</p>}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>

          </label>
          <input type="email"
            placeholder="Your Email"
            className="input input-bordered w-full max-w-xs"
            {...register("email", {
              required: {
                value: true,
                message: 'Email Required'
              },
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: 'Provide a valid email'
              }
            })
            }
          />
          <label className="label">
            {errors.email?.type === 'required' && <p className="label-text-alt text-red-500">{errors.email.message}</p>}
            {errors.email?.type === 'pattern' && <p className="label-text-alt text-red-500">{errors.email.message}</p>}
          </label>
        </div>


        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Specialty</span>
          </label>

          <select {...register('specialty')} class="select input-bordered select-secondary w-full max-w-xs">

            {
              services.map(service => <option
              key={service._id}
              value={service.name}
              >{service.name}</option> )
            }
          </select>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Photo</span>

          </label>
          <input type="file"
            className="input input-bordered w-full max-w-xs"
            {...register("image", {
              required: {
                value: true,
                message: 'Image is Required'
              },
            })
            }
          />
          <label className="label">
            {errors.name?.type === 'required' && <p className="label-text-alt text-red-500">{errors.name.message}</p>}
          </label>
        </div>

        <input className='btn w-full max-w-xs text-white' type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddDoctor;