import React, { useContext } from 'react'
import { AppContext } from '../Contexts/AppContext'
import { Container, Row } from 'react-bootstrap';
import User from './User';

const Users = () => {
    const context = useContext(AppContext);//App.js 27.

    return (
        <>
            <Container>
                <Row>
                    {/*user={user} anlamı user=seçilen herhangi bir isim ve User.js te 4.satıra gönderdiğimiz isim. {user}= .map(user)   */}
                    {context.users.map(user => <User user={user} />)}
                </Row>
            </Container>

        </>
    )
}

export default Users