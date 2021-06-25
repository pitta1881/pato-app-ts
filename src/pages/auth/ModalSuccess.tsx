import React from 'react'
import { Alert, Modal } from 'react-bootstrap'

export default function ModalSuccess({ show, variant, handleClose }: { show: boolean, variant: string, handleClose: any }) {
    return (
        <Modal show={show} onHide={handleClose} backdrop={variant === 'success' ? "static" : 'true'} keyboard={variant === 'success' ? "false" : 'true'} >
            <Modal.Header closeButton>
                <Modal.Title>{variant === 'success' ? "Exito!" : "Error!"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Alert variant={variant}>
                    {variant === 'success' ? "Logueado con Exito!" : "Credenciales Inválidas"}
                </Alert>
            </Modal.Body>
        </Modal>
    )
}
