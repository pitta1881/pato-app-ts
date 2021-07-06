import React from 'react'
import IItem from '../../../interfaces/IItem'
import TodoItem from './TodoItem'

export default function Todo(props: any) {
    return (
        <>
            <div className="d-flex align-items-center flex-column">

                <div className="row m-1 p-4">
                    <div className="col">
                        <div className="p-1 h1 text-center mx-auto display-inline-block">
                            <i className="fa fa-check bg-primary text-white rounded p-2"></i>
                                 Pato App TODO
                            </div>
                    </div>
                </div>
                <div className="row m-1">
                    <div className="col col-11 mx-auto">
                        <div className="">
                            <form
                                className="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center"
                                onSubmit={e => props.addToList(e)}>
                                <div className="col">
                                    <input
                                        className="form-control form-control-lg border-0 add-todo-input bg-transparent rounded"
                                        type="text"
                                        placeholder="Nuevo item.."
                                        value={props.item}
                                        onChange={props.handleInput}></input>
                                </div>
                                <div className="col-auto px-0 mx-0 mr-2">
                                    <button type="submit" className={"btn " + (props.item ? 'btn-primary' : 'btn-danger')}>Agregar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="row px-3 align-items-center todo-item rounded">
                    <div className="col px-1 m-1 d-flex align-items-center">
                        {props.listaToDo.length > 0 &&
                            <ul className="list-group w-100">
                                {props.listaToDo.map((item: IItem) =>
                                    !item.check &&
                                    <TodoItem key={item.id} item={item} clickDeleteHandler={props.checkReady}></TodoItem>
                                )}
                            </ul>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
