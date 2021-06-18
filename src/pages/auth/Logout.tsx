import React, { useEffect } from 'react'

export default function Logout(props: any) {

    useEffect(() => {
        props.handleAuth(false)
    })

    return (
        <div className="jumbotron masthead bg-primary text-white text-center">
            <p>Usted terminó la sesión</p>
        </div>
    )
}
