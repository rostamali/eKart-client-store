import React from 'react';
import { useForm } from 'react-hook-form';
import './Register.css';
import useFirebase from '../../hooks/useFirebase';
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import Header from '../../shared/Header/Header';
import Footer from '../../shared/Footer/Footer';

const Register = () => {

    const { register, handleSubmit } = useForm();
    const { handleRegisterUser, auth, setNewUser, setAuthError, setAuthLoading } = useFirebase();
    const onSubmit = data => {

        handleRegisterUser(data.fullName, data.fullEmail, data.fullPassword)
        .then((userCredential) => {

            updateProfile(auth.currentUser, {
                displayName: data.fullName
            })
            const user = userCredential.user;
            if(user.email){
                Swal.fire({
                    icon: 'success',
                    title: 'Account Created',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    },
                    text: "Your account has been created successfully",
                    showConfirmButton: false,
                    timer: 2800,
                })
                setNewUser(user);
                setAuthError('');
            }
        })
        .catch((error) => {
            const errorCode = error.code;
            setAuthError(errorCode);
        }).finally(()=>setAuthLoading(false));
    };

    return (
        <>
            <Header></Header>
            <div id="register">
                <div className="container">
                    <div className="auth__form">
                        <h3 className="form__sm--title text-center">CREATE ACCOUNT</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form__full">
                                <label htmlFor='fullName'>Full Name</label>
                                <input type="text" id='fullName' className='form-control' {...register("fullName")} />
                            </div>
                            <div className="form__full">
                                <label htmlFor='fullEmail'>Email or Username</label>
                                <input type="email" id='fullEmail' className='form-control' {...register("fullEmail")} />
                            </div>
                            <div className="form__full">
                                <label htmlFor='fullPassword'>Password</label>
                                <input type="password" className='form-control' minLength={6} id='fullPassword' {...register("fullPassword")} />
                            </div>
                            <div className="form__bottom text-end">
                                <input className='btn__primary btn__brand' type="submit" value="Create Account" />
                            </div>
                        </form>
                        <div className="form__link">
                            <a href="/login">Already have an account ?</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Register;