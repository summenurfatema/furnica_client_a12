import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Login = () => {
    const { signIn, updateUser, user } = useContext(AuthContext)
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target
        const name = user?.displayName
        const email = form.email.value
        const password = form.password.value
        const role = form.role.value

        const users = {
            displayName: name,
            email: email,
            role: role


        }
        signIn(email, password)
            .then(result => {
                const user = result.user

            })
            .then(error => {

                console.error(error)
            })




        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(users)
        })
            .then(res => res.json())
            .then((data) => {
                console.log(user)
                console.log(data)
            })
    }


    //console.log(name, email, password, role)

    // signIn(email, password)
    //     .then(result => {
    //         const user = result.user
    //         const users = {
    //             displayName: name,
    //             email: email,


    //         }


    //     fetch('http://localhost:5000/users', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json',

    //         },
    //         body: JSON.stringify(users)

    //     })
    //         .then(res => res.json())
    //         .then((data) => {

    //             console.log(user)
    //             console.log(data)
    //         })
    // })

    // .then(err => console.error(err))












    //             updateUser(userInfo)
    //                 .then(() => {

    //                     saveUser(user.displayName, user.email, user.role)
    //                 })
    //                 .catch(err => console.error(err))
    //         })
    //         .catch(err => console.error(err))

    // }

    // const user = {
    //     displayName: name,
    //     email: email,
    //     role: role
    // }

    // const saveUser = (name, email, role) => {
    //     const user = {
    //         displayName: name,
    //         email: email,
    //         role: role
    //     }

    // fetch('http://localhost:5000/users', {
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'application/json',

    //     },
    //     body: JSON.stringify(user)

    // })
    //     .then(res => res.json())
    //     .then((data) => {

    //         console.log(user)
    //         console.log(data)
    //     })




    //         updateUser(userInfo)
    //             .then(() => {

    //                 // saveUser(user?.displayName, user?.email, role)
    //                 // saveUser(userInfo.displayName, userInfo.email, userInfo.role)
    //                 //saveUser(name, email, role)
    //                 // saveUser(displayName, user.email, role)
    //                 //console.log(user.displayName, user.email, role)
    //                 //console.log(user)
    //                 saveUser(user.name, user.email, user.role)
    //                 return toast.success('Login Operation Successful !')

    //             })
    //             .catch(error => console.error(error))

    //     })
    //     .catch(error => console.error(error))

    // const saveUser = (name, email, role) => {

    //     const user = { name, email, role }





    return (
        <div className='flex flex-col justify-center items-center'>
            <div className="text-center">
                <h1 className="text-5xl font-bold my-10">Login now!</h1>

            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  ">
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name='email' type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name='password' type="text" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="k" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Set your role</span>
                        </label>
                        <select name='role' className="select select-bordered select-md w-full max-w-xs">
                            <option selected>Buyer</option>

                            <option >Seller</option>
                        </select>

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-cyan-600 btn-primary">Login</button>
                    </div>
                    <p>New to Furnica ? <Link to='/signup'>Sign Up</Link></p>
                </form>
                <div className="divider">OR</div>
                <div className='pb-7'>
                    <button className='btn outline-none bg-cyan-600 w-4/5 ml-10'>Sign in with Google</button>
                </div>
            </div>
        </div>


    );
};



export default Login;