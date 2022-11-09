import React from 'react';
import img from '../../assets/login/images.png'

const Login = () => {

    const handleLogIn = event =>{
        event.preventDefault();
    }
    return (
        <div>
            <div className="hero w-full my-20">
        <div className="hero-content gap-20 grid md:grid-cols-2  flex-col lg:flex-row">
          <div className="text-center lg:text-left">         
           
           <img className='w-full' src={img} alt="" />
          </div>

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
            <h1 className="text-5xl text-center font-bold">Login</h1>
            <form onSubmit={handleLogIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Login" />
              </div>
            </form>
            {/* <p className='text-center'>New to Genius Car  <Link className='text-orange-600' to="/signup" > Signup</Link> </p> */}
          </div>
        </div>
      </div>
        </div>
    );
};

export default Login;