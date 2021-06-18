import React, { useEffect, useState } from 'react'
import Todo from './Todo'
import Iitem from './Iitem'
import { Redirect } from 'react-router';

export default function TodoModule(props: any) {
    const [listaToDo, setLista] = useState<Iitem[]>([]);
    const [item, setItem] = useState<string>('');

    useEffect(() => {
        const lista: Iitem[] = JSON.parse(sessionStorage.getItem('listaToDo') || '[]');
        lista.length > 0 && setLista(lista);
    }, [])


    function addToList(e: any) {
        e.preventDefault();
        if (item) {
            const newItem: Iitem = { id: listaToDo.length, nombre: item, check: false }
            setItem('');
            setLista([...listaToDo, newItem]);
            sessionStorage.setItem('listaToDo', JSON.stringify([...listaToDo, newItem]))
        }
    }

    function handleInputChange(event: any) {
        setItem(event.target.value)
    }

    function checkReady(indice: number) {
        const newList = listaToDo.map((item: Iitem) => {
            if (item.id === indice) {
                const updatedItem = {
                    ...item,
                    check: !item.check,
                };
                return updatedItem;
            }
            return item;
        });
        setLista(newList);
        sessionStorage.setItem('listaToDo', JSON.stringify(newList))
    }

    return (
        <>
            <div className="masthead container my-2 rounded mx-auto bg-light shadow">
                {props.auth ?
                    <Todo listaToDo={listaToDo}
                        item={item}
                        handleInput={handleInputChange}
                        addToList={addToList}
                        checkReady={checkReady}></Todo>
                    :
                    <Redirect to='/' />
                }
            </div>
        </>
    )
}
