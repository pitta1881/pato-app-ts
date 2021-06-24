import React, { useContext, useEffect, useState } from 'react'
import Todo from './Todo'
import IItem from '../../interfaces/IItem'
import { Redirect } from 'react-router';
import { AuthContext } from '../../context/AuthContext';

export default function TodoModule() {
    const { isAuth } = useContext(AuthContext);

    const [listaToDo, setLista] = useState<IItem[]>([]);
    const [item, setItem] = useState<string>('');

    useEffect(() => {
        const lista: IItem[] = JSON.parse(sessionStorage.getItem('listaToDo') || '[]');
        lista.length > 0 && setLista(lista);
    }, [])


    function addToList(e: any) {
        e.preventDefault();
        if (item) {
            const newItem: IItem = { id: listaToDo.length, nombre: item, check: false }
            setItem('');
            setLista([...listaToDo, newItem]);
            sessionStorage.setItem('listaToDo', JSON.stringify([...listaToDo, newItem]))
        }
    }

    function handleInputChange(event: any) {
        setItem(event.target.value)
    }

    function checkReady(indice: number) {
        const newList = listaToDo.map((item: IItem) => {
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
            {isAuth ?
                <Todo listaToDo={listaToDo}
                    item={item}
                    handleInput={handleInputChange}
                    addToList={addToList}
                    checkReady={checkReady}></Todo>
                :
                <Redirect to='/' />
            }
        </>
    )
}
