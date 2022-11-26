import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast'
import { AuthContext } from '../../context/UserContext';

const SignUp = () => {
    const { createUser, updateUser } = useContext(AuthContext)

    const handleSignup = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value

        console.log(name, email, password)


        createUser(email, password)
            .then(result => {
                const user = result.user
                const userInfo = {
                    displayName: name,
                    email: email
                }
                updateUser(userInfo)
                    .then(() => {

                    })
                    .catch(error => console.error(error))
                toast.success('Account created successfully !!')

            })
            .then(err => console.error(err))


    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignup} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="********" className="input input-bordered" />

                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                        <p>Already have an account ? <Link to='/login'>Login here !!</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;