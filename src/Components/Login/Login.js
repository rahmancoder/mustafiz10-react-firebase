import React, { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile, signOut } from "firebase/auth";
import initializeFirebaseAuthentication from '../../Firebase/Firebase.init';
import useAuth from '../../Hooks/useAuth';

initializeFirebaseAuthentication();

const googleProvider = new GoogleAuthProvider();
const Login = () => {
    // const { signInUsingGoogle,
    //     loading,
    //     handleResetPassword,
    //     verifyEmail,
    //     setUserName,
    //     registerNewUser,
    //     processLogin,
    //     handleGoogleSignIn,
    //     handleSignOut
    // } = useAuth();

    const [user, setUser] = useState({})
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const auth = getAuth();

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

    const toggleLogin = e => {
        setIsLogin(e.target.checked)
    }

    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must contain 2 upper case');
            return;
        }

        if (isLogin) {
            processLogin(email, password);
        }
        else {
            registerNewUser(email, password);
        }

    }

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


    return (
        <div className="mx-5">
            {!user.name ?
                <form onSubmit={handleRegistration}>
                    <h3 className="text-success">Please {isLogin ? 'Login' : 'Register'}</h3>
                    {!isLogin && <div className="row mb-3">
                        <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text" onBlur={handleNameChange} className="form-control" id="inputName" placeholder="Your Name" />
                        </div>
                    </div>}
                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" onBlur={handlePasswordChange} className="form-control" id="inputPassword3" required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-10 offset-sm-2">
                            <div className="form-check">
                                <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                                <label className="form-check-label" htmlFor="gridCheck1">
                                    Already Registered?
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3 text-danger">{error}</div>
                    <button type="submit" className="btn btn-danger">
                        {isLogin ? 'Login' : 'Register'}
                    </button>
                    <button type="button" onClick={handleResetPassword} className="btn btn-dark btn-sm mx-2">Reset Password</button>

                </form>
                :
                user.name && <div>
                    <h2>Welcome {user.name}</h2>
                    <p>I know your email address: {user.email}</p>
                    <img src={user.photo} alt="" />
                </div>

            }
            <br /><br /><br />
            <div>--------------------------------</div>
            <br /><br /><br />
            {/* <button onClick={handleGoogleSignIn}>Google Sign In</button> */}
            {!user.name ?
                <div>
                    <button onClick={handleGoogleSignIn}>Google Sign In</button>
                    {/* <button onClick={handleGithubSignIn}>Github Sign In</button> */}
                    {/* <button onClick={handleFacebookSignIn}>Facebook Sign In</button> */}
                </div> :
                <button onClick={handleSignOut}>Sign Out</button>
            }
            <br />


            {
                user.name && <div>
                    <h2>Welcome {user.name}</h2>
                    <p>I know your email address: {user.email}</p>
                    <img src={user.photo} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;