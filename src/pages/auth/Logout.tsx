import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../context/AuthContext';

export default function Logout(props: any) {
    const { authEvent } = useContext(AuthContext);

    useEffect(() => {
        authEvent('logout')
    })

    return (
        <div className="jumbotron masthead bg-primary text-white text-center">
            <p>Usted terminó la sesión</p>
        </div>
    )
}
