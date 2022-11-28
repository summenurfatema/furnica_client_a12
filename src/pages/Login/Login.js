import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import useTitle from '../hooks/useTitle';

const Login = () => {

    useTitle('Login-Furnica')

    const googleProvider = new GoogleAuthProvider()
    const { signIn, google } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'


    const handleLogin = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value


        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                toast.success('Login successfull')
                navigate(from, { replace: true })

                form.reset('')
            })
            .catch(error => console.error(error))

    }

    const handleGoogleSignIn = () => {
        google(googleProvider)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => console.log(error))

    }

    return (
        <div className='flex flex-col justify-center items-center mb-7'>
            <div className="text-center">
                <h1 className="text-5xl font-bold my-10">Login now!</h1>

            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  ">
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input required name='email' type="text" placeholder="Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input required name='password' type="password" placeholder="*********" className="input input-bordered" />
                        <label className="label">
                            <a href="k" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn outline-none bg-cyan-600 ">Login</button>
                    </div>
                    <p>New to Furnica ? <Link to='/signup'>Sign Up</Link></p>
                </form>
                <div className="divider">OR</div>
                <div className='pb-7'>
                    <button onClick={handleGoogleSignIn} className='btn outline-none bg-cyan-600 w-4/5 ml-10'>Sign in with Google</button>
                </div>
            </div>
        </div>


    );
};



export default Login;