import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import DolarModule from '../Dolar/DolarModule'
import PaisesModule from '../Paises/PaisesModule'
import TodoModule from '../todo/TodoModule'
import styles from './AppDashboard.module.scss'


export default function AppsDashboard() {
    const [currentApp, setCurrentApp] = useState('');

    return (
        <>
            <div className={"mx-2 " + (currentApp !== '' ? styles.appsAside : styles.appsCenter)}>
                <Card className={styles.card + ' m-2 p-2'} onClick={() => setCurrentApp('TodoModule')}>
                    <Card.Img variant="top" src='assets/todoList.png' />
                    <Card.Body>
                        <Card.Text>
                            ToDo List App
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className={styles.card + ' m-2 p-2'} onClick={() => setCurrentApp('PaisesModule')}>
                    <Card.Img variant="top" src='assets/paises.png' />
                    <Card.Body>
                        <Card.Text>
                            Paises App
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className={styles.card + ' m-2 p-2'} onClick={() => setCurrentApp('DolarModule')}>
                    <Card.Img variant="top" src='assets/dolar.jpg' />
                    <Card.Body>
                        <Card.Text>
                            Dolar App
                    </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            {currentApp !== '' &&
                <div className={"mx-2 " + styles.showApp}>
                    {currentApp === 'TodoModule'
                        ? <TodoModule />
                        : currentApp === 'PaisesModule'
                            ? <PaisesModule />
                            : currentApp === 'DolarModule'
                                ? <DolarModule />
                                : 'No se encuentra la app'
                    }
                </div>
            }
        </>
    )
}
