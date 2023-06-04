import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const CollaboratorForm = ({ output }) => {

  const [collaboratorName, setCollaboratorName] = useState('')
  const [collaboratorEmail, setCollaboratorEmail] = useState('')

  const handlerProcessForm = (evt) => {
    evt.preventDefault()
    output({
      nombre: collaboratorName,
      email: collaboratorEmail
    })

    /* clear inputs */
    setCollaboratorName('')
    setCollaboratorEmail('')

  }

  const setInputHandler = (e) => {
    switch (e.target.id) {
      case 'collaboratorName':
        setCollaboratorName(e.target.value)
        break;
      case 'collaboratorEmail':
        setCollaboratorEmail(e.target.value)

        break;

      default:
        break;
    }

  }

  return (
    <div className="py-4">

      <Form.Group className="mb-3">
        <Form.Label>Nombre Colaborador</Form.Label>
        <Form.Control
          id="collaboratorName"
          value={collaboratorName}
          type="text"
          placeholder="Ingresa el nombre del colaborador"
          onChange={(e) => { setInputHandler(e) }}

        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Correo Electrónico</Form.Label>
        <Form.Control
          id="collaboratorEmail"
          value={collaboratorEmail}
          type="email"
          placeholder="usuario@dominio.com"
          onChange={(e) => { setInputHandler(e) }}
        />
      </Form.Group>

      <Button className="px-4 mt-2"
        onClick={(evt) => { handlerProcessForm(evt) }}
      > Agregar Colaborador </Button>
    </div>
  )
}

export default CollaboratorForm