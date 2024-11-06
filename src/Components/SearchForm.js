import React from 'react'
import { Button, Container, Form, InputGroup } from 'react-bootstrap'

const SearchForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

    }
    return (
        <>
            <Container className='py-3'>
                <Form onSubmit={handleSubmit}> {/* Form submit old. çalışacak olan fonk. ismi handleSubmit tir. */}
                    <InputGroup>
                        <Form.Control placeholder='Enter search github user name.'>

                        </Form.Control>
                        <Button variant='success' type='submit'>Search</Button>
                    </InputGroup>
                </Form>
            </Container>
        </>
    )
}

export default SearchForm