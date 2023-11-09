import { Link, useLocation, useNavigate } from 'react-router-dom';
import imglog from '../../../assets/images/login/login.svg';
import { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import axios from 'axios';



const Login = () => {
    const {loginUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e =>{
        e.preventDefault();
        
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const useDetails = {email, password};
        console.log(useDetails);


        loginUser(email, password)
        .then(result=> {
            const loggedinUser = result.user;
            console.log(loggedinUser);
            const user = {email};
            
            // jwt token api
            axios.post('http://localhost:5000/jwt', user, {withCredentials: true})
            .then(res=> {
                console.log(res.data);
                if(res.data.success){
                    navigate(location?.state ? location?.state : '/');
                }
            })

        })
        .then(error => {
            console.log(error)
        })
    }

    

    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content flex-col lg:flex-row ">
                <div className=" w-1/2 mr-20">
                    <img src={imglog} alt="" />
                </div>
                <div className="card flex-shrink-0 w-1/2 ml-16  shadow-xl bg-base-100">
                    <h2 className='text-4xl text-center font-bold mt-5'>Login</h2>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Your password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="bg-[#FF3811] p-3 text-white font-semibold rounded-lg">Login</button>
                            {/* <input className="bg-[#FF3811] p-3 text-white font-semibold rounded-lg" type="submit" value="Login" /> */}
                        </div>
                        <p>Have an account? <Link to='/signup' className='text-[#FF3811] '>Sign In</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;