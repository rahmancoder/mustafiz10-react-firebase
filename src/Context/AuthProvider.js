
import React, { createContext } from 'react';
// import { createContext } from 'react';
// import useFirebasetwo from '../Hooks/useFirebasetwo';
import useFirebase from '../Hooks/useFirebase';


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    // const { children } = props;
    const allContexts = useFirebase();
    // const allContexts = useFirebasetwo();

    return (
        <AuthContext.Provider value={allContexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;