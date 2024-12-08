import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../Contexts/AppContext';
import { Card, CardBody, Col, Container, ListGroup, Row } from 'react-bootstrap';
import UserRepo from '../../Components/UserRepo';

const UserDetailsPage = () => {
    const context = useContext(AppContext);
    const { login } = useParams(); //useParams dışarı çıkarttığı nesnenin içindeki login i alıp değişken içine attım.

    useEffect(() => {
        //1.Burada login App.js 28. satıra gidecek ve logini userName atayacak.
        context.getUser(login);
        context.getRepos(login);
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
                            <Row>
                                <Col xs={12}>
                                    <Card.Header className='display-6 text-danger'>
                                        {context.user.name} ({context.user.login})
                                    </Card.Header>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={9}>
                                    <CardBody>
                                        <Card.Title>Followers</Card.Title>{context.user.followers}
                                        <Card.Title>Following</Card.Title>{context.user.following}
                                    </CardBody>
                                </Col>
                                <Col xs={3}>
                                    <CardBody>
                                        <ListGroup>
                                            {context.userRepos.map(userRepo => <UserRepo key={userRepo.id} userRepoName={userRepo.name} userRepoUrl={userRepo.html_url} />
                                            )}
                                        </ListGroup>
                                    </CardBody>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </>
    )
}

export default UserDetailsPage

