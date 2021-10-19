import { useState, useEffect } from 'react';
// import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { getAuth, signInWithPopup, onAuthStateChanged, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile, signOut } from "firebase/auth";

import initializeFirebaseAuthentication from '../Firebase/Firebase.init';


initializeFirebaseAuthentication();

const useFirebase = () => {

    // All State
    const [user, setUser] = useState({});

    const [loading, setLoading] = useState(true)


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
            .finally(() => { setLoading(false) });
    }

    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setLoading(false))
    }

    // observing the user auth state changed or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, [])





    // const googleProvider = new GoogleAuthProvider();


    // const [user, setUser] = useState({})
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    // const [isLogin, setIsLogin] = useState(false);

    // const auth = getAuth();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);


                const { displayName, email, photoURL } = result.user;
                const loggedInUser = {
                    name: displayName,
                    email: email,
                    photo: photoURL
                };
                setUser(loggedInUser);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    // const toggleLogin = e => {
    //     setIsLogin(e.target.checked)
    // }

    // const handleNameChange = e => {
    //     setName(e.target.value);
    // }
    // const handleEmailChange = e => {
    //     setEmail(e.target.value);
    // }

    // const handlePasswordChange = e => {
    //     setPassword(e.target.value)
    // }

    // const handleRegistration = e => {
    //     e.preventDefault();
    //     console.log(email, password);
    //     if (password.length < 6) {
    //         setError('Password Must be at least 6 characters long.')
    //         return;
    //     }
    //     if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
    //         setError('Password Must contain 2 upper case');
    //         return;
    //     }

    //     if (isLogin) {
    //         processLogin(email, password);
    //     }
    //     else {
    //         registerNewUser(email, password);
    //     }

    // }

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                verifyEmail();
                setUserName();
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            })
    }

    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => { })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }


    return {
        user,
        loading,
        signInUsingGoogle,
        handleResetPassword,
        verifyEmail,
        setUserName,
        registerNewUser,
        processLogin,
        handleGoogleSignIn,
        handleSignOut,
        logOut
    }
}

export default useFirebase;