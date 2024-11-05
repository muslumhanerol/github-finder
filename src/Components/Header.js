import React from 'react'
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <Navbar bg='primary' variant='dark'>
                <Container>
                    <NavbarBrand>
                        <NavLink className="nav-link" to="/">Github Finder App</NavLink>
                    </NavbarBrand>
                    <Nav className="ms-auto">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/search">Search</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header