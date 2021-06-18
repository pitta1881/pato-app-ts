import React, { useEffect } from 'react'

export default function Login(props: any) {

    useEffect(() => {
        props.handleAuth(true)
    })

    return (
        <div className="jumbotron masthead bg-primary text-white text-center">
            <p>Usted inició la sesión</p>
        </div>
    )
}
