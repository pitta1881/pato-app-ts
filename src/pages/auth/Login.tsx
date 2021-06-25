import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import { authUser } from '../../services/AuthService';
import stylesFormAuth from './formAuth.module.css';
import ModalSuccess from './ModalSuccess';

export default function Login() {
    const { isAuth, authEvent } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showModal, setShowModal] = useState({
        show: false,
        variant: ''
    })

    function handleLogin(e: any) {  //aca simulo la llamada a la api para loguearse
        e.preventDefault();
        new Promise<boolean>((res, rej) => {
            setTimeout(() => {
                res(authUser({ email, password }))
            }, 1000);
        }).then(isLogued => {
            if (isLogued) {
                setShowModal({ show: true, variant: 'success' })
                setTimeout(() => {
                    authEvent('login')
                }, 2000);
            } else {
                setShowModal({ show: true, variant: 'danger' })
            };
        })
    }

    return (
        <>
            {showModal &&
                <ModalSuccess show={showModal.show} variant={showModal.variant} handleClose={setShowModal} />}
            {!isAuth ?
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
                    <div className="form-group">
                        <a className={stylesFormAuth.btnForgetPwd}>Forget Password?</a>
                    </div>
                </div>
                : (
                    <Redirect to="/" />
                )}
        </>
    )
}
