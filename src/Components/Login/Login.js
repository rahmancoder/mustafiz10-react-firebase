import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {

    const { signInUsingGoogle } = useAuth();
    // const { signInUsingGoogle } = useAuth();
    // const location = useLocation();
    // const history = useHistory();
    // const redirect_uri = location.state?.from || '/home';


    // const handleGoogleLogin = () => {
    //     signInUsingGoogle()
    //         .then(result => {
    //             history.push(redirect_uri);
    //         })
    // }


    return (
        <div>
            <div>
                <h2>Login</h2>
                <form>
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>New User? <Link to="/register">Create Account</Link></p>
                <div className="mb-4">___________OR___________</div>
                {/* <button className="btn-regular" onClick={handleGoogleLogin}> Google Sign In</button> */}
                <button className="btn-regular" onClick={signInUsingGoogle}> Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;