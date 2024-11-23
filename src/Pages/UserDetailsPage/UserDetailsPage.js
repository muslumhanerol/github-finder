import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../Contexts/AppContext';
import { Card, Container, Row } from 'react-bootstrap';

const UserDetailsPage = () => {
    const context = useContext(AppContext);
    const { login } = useParams(); //useParams dışarı çıkarttığı nesnenin içindeki login i alıp değişken içine attım.

    useEffect(() => {
        //1.Burada login App.js 28. satıra gidecek ve logini userName atayacak.
        context.getUser(login);
    })
    return (
        <>
            <Container>
                <Card>
                    <Row>

                    </Row>
                </Card>
            </Container>
        </>
    )
}

export default UserDetailsPage

