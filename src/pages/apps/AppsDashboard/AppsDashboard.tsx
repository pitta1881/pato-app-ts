import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import DolarModule from '../Dolar/DolarModule'
import PaisesModule from '../Paises/PaisesModule'
import TodoModule from '../todo/TodoModule'
import styles from './AppDashboard.module.scss'

const modulos = [{
    component: TodoModule,
    appName: 'Todo',
    img: 'assets/todoList.png',
    text: 'ToDo List App'
}, {
    component: PaisesModule,
    appName: 'Paises',
    img: 'assets/paises.png',
    text: 'Paises App'
}, {
    component: DolarModule,
    appName: 'Dolar',
    img: 'assets/dolar.jpg',
    text: 'Dolar App'
}]


export default function AppsDashboard() {
    const [currentApp, setCurrentApp] = useState('');

    return (
        <>
            <div className="f-flex flex-column justify-content-center">
                <div className={"mx-2 " + (currentApp !== '' ? styles.appsAside : styles.appsCenter)}>
                    {modulos.map((modulo, index) =>
                        <Card key={index} className={styles.card + ' m-2 p-2'} onClick={() => setCurrentApp(modulo.appName)}>
                            <Card.Img variant="top" src={modulo.img} />
                            <Card.Body>
                                <Card.Text>
                                    {modulo.text}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )}
                </div>
            </div>
            {currentApp !== '' &&
                <div className={"mx-2 " + styles.showApp}>
                    {React.createElement(modulos.find(modulo => modulo.appName === currentApp)?.component || 'div')}
                </div>
            }
        </>
    )
}
