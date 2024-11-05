import React from 'react'
import { Container } from 'react-bootstrap'

const HomePage = () => {
    return (
        <>
            <Container fluid>
                <div style={{ height: "86vh" }} className='d-flex justify-content-center align-items-center flex-column'>
                    <h1 className='display-4 text-primary text-center'>Welcome!</h1>
                    <p className='display-2 text-success text-center'>GitHub Finder</p>
                </div>
            </Container>
        </>
    )
}

export default HomePage