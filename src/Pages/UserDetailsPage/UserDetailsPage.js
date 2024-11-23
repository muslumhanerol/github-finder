import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../Contexts/AppContext';
import { Card, Col, Container, Row } from 'react-bootstrap';

const UserDetailsPage = () => {
    const context = useContext(AppContext);
    const { login } = useParams(); //useParams dışarı çıkarttığı nesnenin içindeki login i alıp değişken içine attım.

    useEffect(() => {
        //1.Burada login App.js 28. satıra gidecek ve logini userName atayacak.
        context.getUser(login);
    }, [])
    return (
        <>
            <Container>
                <Card>
                    <Row>
                        <Col xs={4}>
                            <Card.Img className="" src={context.user.avatar_url} />
                        </Col>
                        <Col xs={8}>
                            <Card.Header className='display-6 text-danger'>
                                {context.user.name} ({context.user.login})
                            </Card.Header>
                            <Card.Body>
                                <a className='btn btn-link' href={context.user.repos_url}> User's Repos</a>
                            </Card.Body>
                            <Card.Title>Followers</Card.Title>{context.user.followers}
                            <Card.Title>Following</Card.Title>{context.user.following}

                        </Col>
                    </Row>
                </Card>
            </Container>
        </>
    )
}

export default UserDetailsPage

