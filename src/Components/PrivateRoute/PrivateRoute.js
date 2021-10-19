import React from 'react';
// import useAuth from '../../Hooks/useAuth';
import { Route, Redirect } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';

const PrivateRoute = ({ children, ...rest }) => {
    // const { user } = useAuth();
    const { user } = useFirebase();
    // if (loading) return 'loading';
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>}
        >

        </Route>
    );
};

export default PrivateRoute;