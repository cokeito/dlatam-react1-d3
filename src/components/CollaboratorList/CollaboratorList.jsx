
import React from 'react'
import { Table } from 'react-bootstrap'

const CollaboratorList = ({ sourceData }) => {
  return (
    <div className="py-4">
      <h5> Listado de Colaboradores </h5>

      <div className="row">
        <div className="col-6">

          <Table striped bordered className="mt-3">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Correo</th>
              </tr>
            </thead>
            <tbody>
              {
                sourceData.map((e, idx) => {
                  return (
                    <tr key={e.id}>
                      <td>{e.nombre}</td>
                      <td>{e.correo}</td>
                    </tr>
                  )
                })
              }

            </tbody>
          </Table>

        </div>
      </div>


    </div>
  )
}

export default CollaboratorList