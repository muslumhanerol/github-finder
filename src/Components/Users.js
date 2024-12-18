import React, { useContext } from 'react'
import { AppContext } from '../Contexts/AppContext'
import { Col, Container, Row } from 'react-bootstrap';
import User from './User';
import UserDetails from './UserDetails';

const Users = () => {
    const context = useContext(AppContext);//App.js 27.

    return (
        <>
            {/* Arama sonuçlarının gösterimi.*/}
            <Container>
                <Row>
                    {/* Detay yoksa 12 col varsa 8 col gösterir. */}
                    <Col sm={context.user.login ? 6 : 12}>
                        <Row>
                            {/*user={user} anlamı user=seçilen herhangi bir isim ve User.js te 4.satıra gönderdiğimiz isim. {user}= .map(user)   */}
                            {context.users.map(user => <User user={user} />)}
                        </Row>
                    </Col>
                    <Col sm={context.user.login ? 6 : 0}>
                        {context.user.login &&
                            <UserDetails login={context.user.login} />
                        }
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Users