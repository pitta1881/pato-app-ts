import axios from 'axios'
import React, { useEffect, useState } from 'react'
import IDolar from '../../../interfaces/IDolar';
import dolarEstilos from './Dolar.module.scss'
import ReactLoading from "react-loading";
import { envDolar } from '../../../env/env.dolar';

export default function DolarModule() {
    const [dolarObj, setDolarObj] = useState<IDolar | null>()

    useEffect(() => {
        axios.get<IDolar[]>(envDolar.urlBase + envDolar.subdomDolar, {
            headers: {
                'Authorization': `BEARER ${envDolar.token}`
            }
        })
            .then((retorno) => {
                setDolarObj(retorno.data[retorno.data.length - 1])
            })
            .catch(err => console.log(err))
    }, [])

    return (
        !dolarObj
            ? <ReactLoading type='bubbles' color='#fff' height={'unset'} width={375} />
            :
            <div className="d-flex flex-column justify-content-center">
                <h1>Dolar Hoy</h1>
                <div className="row">
                    <p>Fecha: {dolarObj.d}</p>
                </div>
                <div className="row">
                    <p>Precio: ${dolarObj.v}</p>
                </div>
                <small>Fuente: https://estadisticasbcra.com</small>
            </div>
    )
}
