import React from 'react';
import { useForm } from 'react-hook-form';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = async data => {
        console.log('data', data);
       
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
                  required : {
                    value: true,
                    message : 'Name Required'
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
                  required : {
                    value: true,
                    message : 'Email Required'
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
                  <span className="label-text">Specialization</span>
  
                </label>
                <input type="text" 
                placeholder="speciality" 
                className="input input-bordered w-full max-w-xs"
                {...register("speciality", {
                  required : {
                    value: true,
                    message : 'specialization Required'
                  }
                })
              } 
                />
                <label className="label">
                {errors.password?.type === 'required' && <p className="label-text-alt text-red-500">{errors.password.message}</p>}
                {errors.password?.type === 'minLength' && <p className="label-text-alt text-red-500">{errors.password.message}</p>}
                  
  
                </label>
              </div>
              
              
             <input className='btn w-full max-w-xs text-white' type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddDoctor;