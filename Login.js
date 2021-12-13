import React , {useState , useEffect} from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Avtar from '../../assets/image/avatar.jpg'
import Navbar from '../Landing/Navbar';
import { useForm } from "react-hook-form";


const Login = () => {

    const [email, setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [user , setUser] = useState("");
    const [err , setErr] = useState("");


    const { register, handleSubmit,reset, trigger, formState: { errors },} = useForm();


useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      console.log(foundUser)
      setUser(foundUser);
      if(user)
      {
          navigate('/registration');
      }
    }
  }, []);

  let navigate = useNavigate();


//   const onhandleSubmit = async e =>{
//     e.preventDefault();
//     await axios.get(`http://localhost:3001/users?email=${email}&password=${password}`)
//     .then(function (response){
//             console.log(response,'res===')
//             if(response.data.length===1){
//                 localStorage.setItem('user',response.data[0].email)
//                 setUser(response.data[0].email)
//                 console.log(response,'res==='); 
//             }
//           }  
//     );
//     }



const onSubmit = (data) => {
    console.log(data);
    // axios
    //       .post(
    //         "http://localhost:8000/api/login", null ,{
    //             params : data
    //         })
    //       .then(function (response) {
    //         console.log("-------", response);
    //         if (response) {
    //           // 	<SweetAlert success title="Great !!" onSubmit={true} >
    //           // 	You Logged in Successfully !!
    //           // </SweetAlert>
    //           localStorage.setItem("token", response.data.token);
    //           // localStorage.setItem('')
    //           navigate("/dashboard-default");
    //         }
    //       })
    //       .catch(function (error) {
    //         console.log(error, "++++++++++++++++++++++");
    //         console.log(error.message, "-------");
    //         console.log(error.response.code, "@@@@@@@@");
    //       });


    // new work-----
    //  axios.get("http://localhost:3001/users",null , {params : data})
     axios.get(`http://localhost:3001/users?email=${email}&password=${password}`)
    .then(function (response){
            console.log(response,'res===')
            if(response.data.length===1){
                localStorage.setItem('user',response.data[0].email)
                setUser(response.data[0].email)
                console.log(response,'res==='); 
                navigate('/');
            }
          }  
    );

    
}











    if (user) { 
        alert(`{email} is logged On`)
        navigate("/")
        
      }
      else{
    return (
        <>
         <Navbar/>
        <div className='container-fluid main'>
        <div class="row h-100 py-5 login">
            <div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-150">
                <div class="d-table-cell align-middle">
                    <div class="text-center mt-4">
                        <h1 class="h2">Welcome back</h1>
                        <p class="lead">
                            Sign in to your account to continue
                        </p>
                    </div>
                <div class="card">
                    <div class="card-body main" style={{border: "none"}}>
                    <div class="m-sm-4">
                        <div class="text-center">
                            <img src={Avtar} alt="Chris Wood" class="img-fluid rounded-circle" width="132" height="132" />
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} >
                            {/* <div class="form-group">
                                <label>Email</label>
                                <input class="form-control form-control-sm" type="email" name="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <input class="form-control form-control-sm" type="password" name="password" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                                <small>
                                   <Link to
                                   ="/forgot-password">Forgot password?</Link>
                                </small>
                            </div>
                            <div>
                                <div class="custom-control custom-checkbox align-items-center">
                                    <input type="checkbox" class="custom-control-input" value="remember-me" name="remember-me" />
                                    <label className="custom-control-label text-small">Remember me next time</label>
                                </div>
                            </div>
                            <div class="text-center mt-3">
                                {/* <a href="dashboard-default.html" class="btn btn-lg btn-primary">Sign in</a> */}
                                {/* <button type="submit" className="btn btn-lg btn-primary">Sign in</button>  */}
                             {/* </div>  */} 
                            

                            {/* new validation code */}
                            <div className="form-group">
                            <label>
                              Email <span className="require">*</span>
                            </label>
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
                          <div className="form-group">
                            <label>
                              Password <span classNameName="require">*</span>
                            </label>
                            <input
                              className="form-control form-control-sm"
                              type="password"
                              name="password"
                              placeholder="Enter your password"
                              {...register("password", {
                                required: "password is required",
                              })}
                            />
							{errors.password && (
                              <small className="text-danger">
                                {errors.password.message}
                              </small>
                            )}
                            <p>
                            <small>
                              <a href="pages-reset-password.html">
                                Forgot password?
                              </a>
                            </small>
                            </p>
                          </div>
                          <div>
                          </div>
                          <div>
                            <div className="custom-control custom-checkbox align-items-center">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                value="remember-me"
                                name="remember-me"
                              />
                              <label className="custom-control-label text-small">
                                Remember me next time
                              </label>
                            </div>
                          </div>
                          <div className="text-center mt-3">
                            {/* <a href="dashboard-default.html" className="btn btn-lg btn-primary">Sign in</a> */}
                            <button
                              type="submit"
                              className="btn btn-lg btn-primary"
                            >
                              Sign in
                            </button>
                          </div>






                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
        </>
    );
}
}

export default Login
