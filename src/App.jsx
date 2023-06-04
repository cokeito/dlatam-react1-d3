import { useState } from 'react'
import CollaboratorForm from './components/CollaboratorForm/CollaboratorForm.jsx'
import CollaboratorList from './components/CollaboratorList/CollaboratorList.jsx'
import Header from './components/Header/Header.jsx'
import { collaboratorData } from './data/base.js'

function App() {

  const [collaborators, setCollaborators] = useState(collaboratorData)

  const addNewColaboratorToList = (obj) => {
    setCollaborators([...collaborators, { id: new Date().valueOf(), nombre: obj.nombre, correo: obj.email }])
  }

  const filterCollaboratorList = (obj) => {
    if (obj.query.length == 0) {
      setCollaborators(collaboratorData)
    } else {
      const filterList = collaborators.filter(
        (item) => {
          if (item.nombre.includes(obj.query)) {
            return item
          }
        }
      )
      setCollaborators(filterList)
    }
  }

  return (
    <>
      <Header searchFilter={(obj) => { filterCollaboratorList(obj) }} />
      <div className="px-4">
        <CollaboratorForm output={(obj) => { addNewColaboratorToList(obj) }} />
        <CollaboratorList sourceData={collaborators} />
      </div>
    </>
  )
}

export default App
