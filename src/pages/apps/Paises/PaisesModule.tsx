import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Accordion, Card, Image } from 'react-bootstrap';
import IPais from '../../../interfaces/IPais';
import paisesEstilos from './Paises.module.css'

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
        <Accordion>
            {paises.map((pais: IPais, index: number) =>
                <Card key={index}>
                    <Accordion.Toggle as={Card.Header} className={paisesEstilos.paises_card_header + ' text-primary'} eventKey={index.toString()}>
                        <Image src={pais.flag}
                            className={paisesEstilos.paises_img}
                            width="50"
                            height="50"
                            roundedCircle /> {' '}
                        <p className="d-inline-block m-0 ms-3"><span className="font-weight-bold">{pais.name}</span> - <span>{pais.capital}</span></p>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={index.toString()}>
                        <Card.Body className="text-left text-primary">
                            <div><span className="font-weight-bold">Continente:</span> {pais.region} - {pais.subregion}</div>
                            <div><span className="font-weight-bold">Población:</span> {pais.population}</div>
                            <div><span className="font-weight-bold">Zonas Horarias:</span> {pais.timezones.join(', ')}</div>
                            <div><span className="font-weight-bold">Latitud y Longitud:</span> ({pais.latlng[0]}) ({pais.latlng[1]})</div>
                            <div><span className="font-weight-bold align-top">Monedas:</span> <div className="d-inline-block">{pais.currencies.map(moneda => <p className="m-0">{moneda.code}({moneda.symbol})</p>)}</div></div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            )}
        </Accordion>
    )
}
