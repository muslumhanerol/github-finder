import React from 'react'
import { Container } from 'react-bootstrap'

const HomePage = () => {
    return (
        <>
            <Container fluid>
                <div>
                    <h1 className='display-4 text-primary text-center'>Welcome!</h1>
                    <p className='display-2 text-suscess text-center'>GitHub Finder</p>
                </div>
            </Container>
        </>
    )
}

export default HomePage