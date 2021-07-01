import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Image, ListGroup } from 'react-bootstrap';
import IPais from '../../../interfaces/IPais';

export default function PaisesModule() {
    const [paises, setPaises] = useState([])

    useEffect(() => {
        axios.get('https://restcountries.eu/rest/v2/all')
            .then(retorno => {
                setPaises(retorno.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <ListGroup>
            {paises.map((pais: IPais) =>
                <ListGroup.Item>
                    <Image src={pais.flag}
                        width="50"
                        height="50"
                        roundedCircle /> {' '}
                    {pais.name} - {pais.capital}</ListGroup.Item>
            )}
        </ListGroup>
    )
}
