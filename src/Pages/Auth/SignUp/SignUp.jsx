import { Link, useNavigate } from 'react-router-dom';
import imgsgn from '../../../assets/images/login/login.svg';
import { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';

const SignUp = () => {
    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignup = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const userDetail = {name, email, password};
        console.log(userDetail);

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate('/');
        })
        .then(error=> {
            console.log(error)
        }) 
        
    }
    return (
        <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row ">
            <div className=" w-1/2 mr-20">
                <img src={imgsgn} alt="" />
            </div>
            <div className="card flex-shrink-0 w-1/2 ml-16  shadow-xl bg-base-100">
                <h2 className='text-4xl text-center font-bold mt-5'>Sign up</h2>
                <form onSubmit={handleSignup} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Your name" className="input input-bordered" required />
                    </div>
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
                        <button className="bg-[#FF3811] p-3 text-white font-semibold rounded-lg">Sign up</button>
                        {/* <input className="bg-[#FF3811] p-3 text-white font-semibold rounded-lg" type="submit" value="Login" /> */}
                    </div>
                    <p>Already have an account? <Link to='/login' className='text-[#FF3811] '>Log in</Link></p>
                </form>
            </div>
        </div>
    </div>
    );
};

export default SignUp;