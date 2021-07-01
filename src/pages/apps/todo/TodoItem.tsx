import React from 'react'
import IItem from '../../../interfaces/IItem';

export default function TodoItem({ item, clickDeleteHandler }: { item: IItem, clickDeleteHandler: Function }) {
    return (
        <li className="list-group-item" onClick={() => clickDeleteHandler(item.id)}>{item.id}- {item.nombre}</li>
    )
}
