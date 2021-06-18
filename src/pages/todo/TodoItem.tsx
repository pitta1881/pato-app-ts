import React from 'react'
import Iitem from './Iitem';

export default function TodoItem(props: any) {
    let item: Iitem = props.item;
    return (
        <li className="list-group-item" onClick={() => props.clickDeleteHandler(item.id)}>{item.id}- {item.nombre}</li>
    )
}
