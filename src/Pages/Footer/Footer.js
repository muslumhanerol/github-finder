import React from 'react'
import { Alert, Container } from 'react-bootstrap'

const Footer = () => {
    return (
        <>
            <Alert variant='info'>
                <Container>
                    Bu uygulama MHE tarafından geliştirilmiştir.
                </Container>
            </Alert>
        </>
    )
}

export default Footer