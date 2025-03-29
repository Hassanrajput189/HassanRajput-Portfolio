import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// import { useForm } from 'react-hook-form';

const Page = () => {
//   const {
//     register,
//     handleSubmit,
//     setError,
//     formState: { errors, isSubmitting },
//   } = useForm();

  

  return (
    
    <div>
      <Navbar />
      This is Contact ME
      {/* {isSubmitting && <div>Loading...</div>}
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="username"
            {...register("username", {
              required: { value: true, message: "This field is required" },
              minLength: { value: 3, message: "Min length is 3" },
              maxLength: { value: 8, message: "Max length is 8" },
            })}
            type="text"
          />
          {errors.username && <div className="red">{errors.username.message}</div>}
          <br />
          <input
            placeholder="password"
            {...register("password", {
              minLength: { value: 7, message: "Min length of password is 7" },
            })}
            type="password"
          />
          {errors.password && <div className="red">{errors.password.message}</div>}
          <br />
          <input disabled={isSubmitting} type="submit" value="Submit" />
          {errors.myform && <div className="red">{errors.myform.message}</div>}
          {errors.blocked && <div className="red">{errors.blocked.message}</div>}
        </form>
      </div> */}
      <Footer />
    </div>
  );
};

export default Page;
