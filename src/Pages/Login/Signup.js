import React from 'react';
import { useSignInWithGoogle, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';

const Signup = () => {

    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
  
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
      const [token] = useToken(user || guser)
      const navigate = useNavigate();
  
    let signInError; 
  
    if(loading || gloading || updating){
      return <Loading/>
    }
  
    if(error || gerror || updateError){
      signInError = <small>{error?.message || gerror?.message || updateError?.message}</small>
    }
  
    if (token) {
      
      navigate('/appointment');
    }
  
    const onSubmit = async data => {
      await createUserWithEmailAndPassword(data.email, data.password);
      await updateProfile({ displayName: data.name});
      console.log('update done');
     
    }

    return (
        <div className='flex justify-center items-center h-screen'>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-center font-bold text-2xl">SignUp</h2>
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
                  <span className="label-text">Password</span>
  
                </label>
                <input type="password" 
                placeholder="Password" 
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required : {
                    value: true,
                    message : 'Password Required'
                  },
                  minLength: {
                    value: 6,
                    message: 'Must be 6 characters or longer' 
                  }
                })
              } 
                />
                <label className="label">
                {errors.password?.type === 'required' && <p className="label-text-alt text-red-500">{errors.password.message}</p>}
                {errors.password?.type === 'minLength' && <p className="label-text-alt text-red-500">{errors.password.message}</p>}
                  
  
                </label>
              </div>
              
              {signInError}
             <input className='btn w-full max-w-xs text-white' type="submit" value="SignUp" />
            </form>
              <small>Already have an account? <Link className='text-secondary' to="/login">Please Login</Link></small>
            <div className="divider">OR</div>
            <button
              onClick={() => signInWithGoogle()}
              className="btn btn-outline">Continue With Google</button>
          </div>
        </div>
      </div>
    );
};

export default Signup;