import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
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
                <button
                    className="btn-regular"
                >Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;