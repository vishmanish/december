import React , {useState , useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login1 = () => {
    const [username ,setUserName] = useState("");
const [password , setPassword] = useState("");
const [user , setUser] = useState();
const [err , setErr] = useState('');

let navigate = useNavigate();
useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      console.log(foundUser)
      setUser(foundUser);
      if(setUser)
      {
          navigate('/welcome');
      }
    }
  }, []);
  const handleSubmit = async e =>{
    e.preventDefault();
    // const user = {username , password};
    const response =await axios.get(`http://localhost:3001/users?username=${username}&password=${password}`)
    .then(function (response){
            console.log(response,'res==='); 
            // if(response.data.length === 1)
            // {
            //    console.log(response.data)
            // }
            // store the user in localStorage

            if(response.data.length){
            
              localStorage.setItem('user',response.data[0].username)
              setUser(response.data[0].username)
              navigate('/home'); 
              console.log(response,'res==='); 
              return 
            }
            
            setErr('please enter valid pass')

         
    });
    }
    if (user) {
        return (<div>{username} is loggged in</div>
        )
      }
      else{
    return (
        <>
<div class="row h-100">
    <div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
        <div class="d-table-cell align-middle">
            <div class="text-center mt-4">
                <h1 class="h2">Welcome back, Chris</h1>
                <p class="lead">
                    Sign in to your account to continue
                </p>
            </div>

            <div class="card">
                <div class="card-body">
                    <div class="m-sm-4">
                        <div class="text-center">
                            <img src="img/avatars/avatar.jpg" alt="Chris Wood" class="img-fluid rounded-circle" width="132" height="132" />
                        </div>
                        <form>
                            <div class="form-group">
                                <label>Email</label>
                                <input class="form-control form-control-lg" type="email" name="email" placeholder="Enter your email" />
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <input class="form-control form-control-lg" type="password" name="password" placeholder="Enter your password" />
                                <small>
                                    <a href="pages-reset-password.html">Forgot password?</a>
                                </small>
                            </div>
                            <div>
                                <div class="custom-control custom-checkbox align-items-center">
                                    <input type="checkbox" class="custom-control-input" value="remember-me" name="remember-me" checked />
                                    <label class="custom-control-label text-small">Remember me next time</label>
                                </div>
                            </div>
                            <div class="text-center mt-3">
                                <a href="dashboard-default.html" class="btn btn-lg btn-primary">Sign in</a>
                                {/* <!-- <button type="submit" class="btn btn-lg btn-primary">Sign in</button> --> */}
                            </div>
                        </form>
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

export default Login1
