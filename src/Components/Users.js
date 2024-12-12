import React, { useContext } from 'react'
import { AppContext } from '../Contexts/AppContext'
import { Col, Container, Row } from 'react-bootstrap';
import User from './User';

const Users = () => {
    const context = useContext(AppContext);//App.js 27.

    return (
        <>
            {/* Arama sonuçlarının gösterimi.*/}
            <Container>
                <Row>
                    <Col xs={8}>
                        <Row>
                            {/*user={user} anlamı user=seçilen herhangi bir isim ve User.js te 4.satıra gönderdiğimiz isim. {user}= .map(user)   */}
                            {context.users.map(user => <User user={user} />)}
                        </Row>
                    </Col>
                    <Col xs={4}>
                        Details
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Users