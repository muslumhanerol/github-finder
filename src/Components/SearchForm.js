import React, { useContext, useState } from 'react'
import { Button, Container, Form, InputGroup } from 'react-bootstrap'
import { AppContext } from '../Contexts/AppContext';

const SearchForm = () => {
    const context = useContext(AppContext);
    const [keyword, setKeyword] = useState(""); //Kişi arama state ti.

    const handleSubmit = (e) => {
        e.preventDefault();
        context.searchUsers(keyword); //context içinde searchUsers isimli fonk. var keywordü ora yolla.
    }

    const handleClearAllClick = () => { //arama sonuçlarını ve arama çubuğunu semizleme fonk.
        context.setUsers([]);
        setKeyword("")
    }

    return (
        <>
            <Container className='py-3'>
                <Form onSubmit={handleSubmit}> {/* Form submit old. çalışacak olan fonk. ismi handleSubmit tir. */}
                    <InputGroup>
                        {/* O anki olayın meydana geldiği elementin value değerini keyword e (7.satır) yaz.  */}
                        <Form.Control value={keyword} onChange={(e) => { setKeyword(e.target.value) }} placeholder='Enter search github user name.'>

                        </Form.Control>
                        <Button variant='success' type='submit'>Search</Button>
                    </InputGroup>

                    <div className='d-grid mt-2'>
                        {/* Arama sonrası sayfayı temizleme. */}
                        <Button onClick={handleClearAllClick} variant='danger'>
                            Clear All
                        </Button>
                    </div>
                </Form>
            </Container>
        </>
    )
}

export default SearchForm

// 27.satır setKeyword("") = arama çubuğunun içini arama sonrası boşaltma.