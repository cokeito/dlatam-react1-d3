import { Button, Nav, Navbar, NavDropdown, Form, Container } from 'react-bootstrap';
import React, { useState } from 'react'

const Header = ({ searchFilter }) => {

  const [searchQuery, setSearchQuery] = useState('')

  const setInputHandler = (e) => {
    setSearchQuery(e.target.value)
  }

  const handlerSearchForm = (evt) => {
    evt.preventDefault()
    searchFilter({
      query: searchQuery
    })
  }

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">Base de Datos de Colaboradores</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >

          </Nav>
          <Form className="d-flex">
            <Form.Control
              id="collaboratorSearch"
              type="search"
              placeholder="Buscar Colaborador"
              className="me-2"
              aria-label="Buscar"
              onChange={(e) => { setInputHandler(e) }}
              value={searchQuery}
            />
            <Button
              variant="outline-success"
              onClick={(evt) => { handlerSearchForm(evt) }}
            >Buscar</Button>
          </Form>
        </Navbar.Collapse>


      </Container>
    </Navbar>
  )
}

export default Header