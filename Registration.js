import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import axios from "axios";
import Navbar from "../Landing/Navbar";
import { useForm } from "react-hook-form";



const Registration = () => {

  const [user, setUser] = useState({
    first_name : "",
    last_name : "",
    email: "",
    phone: "",
    password: "",
    confirmpassword: "",
  });

  const { first_name, last_name , email, phone, password, confirmpassword } = user;

  const { register, handleSubmit,reset, trigger, formState: { errors },} = useForm();

  
  let navigate = useNavigate(); 
  const onInputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    // console.log(user);
  };
  // const onRegistHandler = async(e) => {
  //   e.preventDefault();
  //   console.log(user);
  //   await axios.post("http://localhost:3001/users",user);

  //       navigate('/')
  // };

  const onSubmit = (data) => {
      console.log("registration form data",data);
      axios.post("http://localhost:3001/users",data);
      navigate('/')
  }






  return (
    <>
      <Navbar/>
     <div class="row h-100 main registration">
    <div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
        <div class="d-table-cell align-middle">
        <div className="text-center mt-4">
								<h1 className="h2">Get started</h1>
								<p className="lead">
									Start creating the best possible user experience for you customers.
								</p>
							</div>

        <div className="jumbotron">
          <form onSubmit={handleSubmit(onSubmit)} className='main'>
            <div className="form-group row">
            <div className="col-sm-2"></div>
              <label htmlFor="first_name" className="col-sm-3 col-form-label">
                First Name:
              </label>
              <div className="col-sm-6">
                <input
                  type="text"
                  name="first_name"
                  placeholder="Enter your first name"
                  className={`form-control form-control-sm ${
                    errors.first_name && "invalid"
                  }`}
                 {...register("first_name",
                   {required:"first name is required" , 
                   pattern :{
                    value: /^[a-zA-Z]+$/,
                    message: "only alphabet is allowed"
                  },
                    minLength: {
                      value: 3,
                      message: 'minimum length is 3 charecter'
                    },
                  })} 
                  onKeyUp = {()=> {trigger("first_name")}}
              />
              {errors.first_name && (
                                    <small className="text-danger">
                                      {errors.first_name.message}
                                    </small>
                                  )}
              </div>
            </div>
            <div className="form-group row">
            <div className="col-sm-2"></div>
              <label htmlFor="fullname" className="col-sm-3 col-form-label">
                Last Name : 
              </label>
              <div className="col-sm-6">
                <input
                  type="text"
                  name="last_name"
                  placeholder="Enter your last name"
                  className={`form-control form-control-sm ${
                    errors.last_name && "invalid"
                  }`}
                  {...register("last_name",
                  {required:"last name is required" , 
                  pattern :{
                    value: /^[a-zA-Z]+$/,
                    message: "only alphabet is allowed"
                  },
                   minLength: {
                     value: 3,
                     message: 'minimum length is 3 charecter'
                   },
                 })}  
                 onKeyUp = {()=> {trigger("last_name")}}
                />
                {errors.last_name && (
                                    <small className="text-danger">
                                      {errors.last_name.message}
                                    </small>
                                  )}
              </div>
            </div>

            <div className="form-group row">
                <div className="col-sm-2"></div>
              <label htmlFor="email" className="col-sm-3 col-form-label">
                Email : 
              </label>
              <div className="col-sm-6">
                <input
                  className={`form-control form-control-sm ${
                    errors.email && "invalid"
                  }`}
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "email is required",
                    pattern : {
                      value : /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i ,
                      message:" Email is Not Valid",
                    },
                                  })}
                    onKeyUp = {()=> {trigger("email")}}
                                />
                    {errors.email && (
                                    <small className="text-danger">
                                      {errors.email.message}
                                    </small>
                                  )}
                                </div>
            </div>
            <div className="form-group row">
            <div className="col-sm-2"></div>
              <label htmlFor="phone" className="col-sm-3 col-form-label">
                Phone : 
              </label>
              <div className="col-sm-6">
                <input
                  type="text"
                  name="phone"
                  className={`form-control form-control-sm ${
                    errors.phone && "invalid"
                  }`}
                  {...register("phone",{ required:"phone  no is required",
                  pattern : {
                      value: /^[0-9]+$/ ,
                      message : "numeric  value only "
                  },
                  maxLength: {
                    value: 10,
                    message: 'maximum length is 10'
                  },

                })} 
                />
                 {errors.phone && (
                                    <small className="text-danger">
                                      {errors.phone.message}
                                    </small>
                                  )}
              </div>
            </div>
            <div className="form-group row">
            <div className="col-sm-2"></div>
              <label htmlFor="password" className="col-sm-3 col-form-label">
                Password : 
              </label>
              <div className="col-sm-6">
                <input
                  className="form-control form-control-sm"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  {...register("password", {
                    required: "password is required",
                    minLength: {
                      value: 4,
                      message: 'password length is 4 charecter'
                    },
                    maxLength: {
                      value: 8,
                      message: 'password max length is 8 charecter'
                    },
                  })}
                />
                {errors.password && (
                  <small className="text-danger">
                    {errors.password.message}
                  </small>
                )}
              </div>
            </div>
            <div className="form-group row">
            <div className="col-sm-1"></div>
              <label htmlFor="confirmpassword" className="col-sm-4 col-form-label">
                Confirm Password:
              </label>
              <div className="col-sm-6">
                <input
                  type="password"
                  name="confirmpassword"
                  className="form-control"
                  {...register("confirmpassword", {
                    required: "confirm password is required",
                    minLength: {
                      value: 4,
                      message: 'password length is 4 charecter'
                    },
                    maxLength: {
                      value: 8,
                      message: 'password max length is 8 charecter'
                    },
                  })}
                />
                 {errors.confirmpassword && (
                  <small className="text-danger">
                    {errors.confirmpassword.message}
                  </small>
                )}
              </div>
            </div>
            <div className="my-3" style={{textAlign: "center"}}>
            <button type="submit" className="btn btn-primary">
                Create an Account
              </button>
              <p>
                Already have an account?<Link to="/login"> Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      </div>
      </div>
    </>
  );
};
export default Registration;
