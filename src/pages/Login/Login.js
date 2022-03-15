import React from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Login.css';
import Swal from "sweetalert2";
import Header from '../../shared/Header/Header';
import Footer from '../../shared/Footer/Footer';

const Login = () => {

    const { register, handleSubmit, reset } = useForm();
    const { handleSigninUser, setNewUser, setAuthError, setAuthLoading } = useFirebase();
    const location = useLocation();
    const navigate = useNavigate();
    const redirectUri = location.state?.from || '/';

    const onSubmit = data => {

        handleSigninUser(data.fullEmail, data.fullPassword)
        .then((userCredential) => { 
            const user = userCredential.user;
            if(user.email){
                Swal.fire({
                    title: 'User login succeed',
                    icon: 'success',
                    showCancelButton: false,
                    confirmButtonColor: '#ff4c3b',
                    confirmButtonText: 'Okay'
                }).then((result) => {
                if (result.isConfirmed) {
                    setNewUser(user);
                    setAuthError('');
                    setInterval(function(){
                        navigate(redirectUri);
                    },1200);
                }
                })
            }
        })
        .catch((error) => {
            const errorCode = error.code;
            setAuthError(errorCode);
        }).finally(()=>setAuthLoading(false));
        reset();
    };

    return (
        <>
            <Header></Header>
            <div id="login">
                <div className="container">
                    <div className="auth__form">
                        <h3 className="form__sm--title text-center">LOGIN</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form__full">
                                <label htmlFor='fullEmail'>Email or Username</label>
                                <input type="email" id='fullEmail' className='form-control' {...register("fullEmail")} />
                            </div>
                            <div className="form__full">
                                <label htmlFor='fullPassword'>Password</label>
                                <input type="password" className='form-control' minLength={6} id='fullPassword' {...register("fullPassword")} />
                            </div>
                            <div className="form__bottom text-end">
                                <input className='btn__primary btn__brand' type="submit" value="Login Now" />
                            </div>
                        </form>
                        <div className="form__link">
                            <a href="/create-user">New user ?</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Login;