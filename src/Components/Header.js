import React from 'react'
import { Container, Navbar, NavbarBrand } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <Navbar bg='primary' variant='dark'>
                <Container>
                    <NavbarBrand>
                        <NavLink className="nav-link" to="/">Github Finder App</NavLink>
                    </NavbarBrand>
                </Container>
            </Navbar>
        </>
    )
}

export default Header