import axios from 'axios'
import React, { useEffect, useState } from 'react'
import IDolar from '../../../interfaces/IDolar';
import dolarEstilos from './Dolar.module.scss'
import ReactLoading from "react-loading";
import tokenBna from '../../../env/env.dolar';

export default function DolarModule() {
    const [dolarObj, setDolarObj] = useState<IDolar | null>()

    useEffect(() => {
        axios.get<IDolar>(tokenBna.urlBase + tokenBna.subdomDolar)
            .then((retorno) => {
                setDolarObj(retorno.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        !dolarObj
            ? <ReactLoading type='bubbles' color='#fff' height={'unset'} width={375} />
            : <>
                <h1>Dolar</h1>
                <p>Fecha: {dolarObj.fecha}</p>
                <p>Compra: {dolarObj.compra}</p>
                <p>Venta: {dolarObj.venta}</p>
            </>
    )
}
