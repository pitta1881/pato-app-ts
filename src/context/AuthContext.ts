import React, { createContext, Dispatch } from 'react'

export const AuthContext = createContext<{
    isAuth: boolean;
    authEvent: React.Dispatch<any>;
}>({
    isAuth: false,
    authEvent: () => { }
})