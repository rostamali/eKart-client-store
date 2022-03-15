import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import firebaseInit from "../firebase/firebase.init";

firebaseInit();
const useFirebase = () => {

    const auth = getAuth();
    const [newUser, setNewUser] = useState([]);
    const [authError, setAuthError] = useState('');
    const [authLoading, setAuthLoading] = useState(true);

    const handleRegisterUser = (name, email, password) =>{

        return createUserWithEmailAndPassword(auth, email, password);

    }

    const handleSigninUser = (email, password) =>{
        setAuthLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const handleSignoutUser = () =>{

        Swal.fire({
            title: 'Are you sure',
            text: "want to be logout now?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ff4c3b',
            confirmButtonText: 'Yes, Log out',
            customClass: {
                confirmButton: 'alert__confirm--btn',
                cancelButton: 'alert__cancel--btn',
                closeButton: 'alert__close--btn',
                actions: "alert__close--btn",
                validationMessage: "alert__close--btn",
            }
          }).then((result) => {
            if (result.isConfirmed) {
                signOut(auth).then(() => {
                    setNewUser({});
                }).catch((error) => {
                    setAuthError(error.code);
                });
            }
        })
    }
 
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setNewUser(user);
              
            } else {
                setNewUser({});
            }
            setAuthLoading(false)
        });
        return () => unsubscribed;
    },[auth])
    

    

    return {
        handleRegisterUser,
        authError,
        handleSigninUser,
        newUser,
        handleSignoutUser,
        setAuthError,
        setNewUser,
        setAuthLoading,
        authLoading,
        auth
    };
};

export default useFirebase;