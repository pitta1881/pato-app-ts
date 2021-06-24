import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import { authUser } from '../../services/AuthService';
import stylesFormAuth from './formAuth.module.css';

export default function Login() {
    const history = useHistory();
    const { authEvent } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showErrorCredenciales, setShowErrorCredenciales] = useState(false)

    function handleLogin(e: any) {
        e.preventDefault();
        new Promise<boolean>((res, rej) => {
            setTimeout(() => {
                res(authUser({ email, password }))
            }, 1000);
        }).then(isLogued => {
            if (isLogued) {
                authEvent('login')
                history.push("/");
            } else {
                setShowErrorCredenciales(true);
            };
        })

    }

    return (
        <>
            <div className={`${stylesFormAuth.formAuth} ${stylesFormAuth.login_form_1} p-5 my-2 d-flex justify-content-center flex-column`}>
                <h3>LOGIN</h3>
                <form action="">
                    <div className="form-group my-2">
                        <input type="email" className="form-control" placeholder="Your Email *"
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group my-2">
                        <input type="password" className="form-control" placeholder="Your Password *"
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="form-group my-3">
                        <button type="submit" className={stylesFormAuth.btnSubmit}
                            onClick={handleLogin}>Login</button>
                    </div>
                </form>
                {showErrorCredenciales &&
                    <p className="my-2 text-danger text-center">Credenciales Inválidas</p>
                }
                <div className="form-group">
                    <a className={stylesFormAuth.btnForgetPwd}>Forget Password?</a>
                </div>
            </div>
        </>
    )
}
