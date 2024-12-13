import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../Contexts/AppContext';
import { Card, CardBody, CloseButton, Col, Container, ListGroup, Row } from 'react-bootstrap';
import UserRepo from './UserRepo';

const UserDetails = ({ login }) => {
    const context = useContext(AppContext);

    useEffect(() => {
        //1.Burada login App.js 28. satıra gidecek ve logini userName atayacak.
        context.getUser(login);
        context.getRepos(login);
    }, [])
    return (
        <>
            <Card>
                <Row> {/* Başlık */}
                    <Col xs={12}>
                        {/* Kullanıcı name */}
                        <Card.Header className='d-flex justify-content-between align-items-center display-6 text-danger'>
                            {context.user.name} ({context.user.login})
                            <CloseButton onClick={() => { context.setUser({}) }} className='fs-6' />
                            {/* Dizi içini boşaltan fonksiyon. */}
                        </Card.Header>
                    </Col>
                </Row>
                <Row>
                    <Col xs={4}>
                        <CardBody>
                            <Card.Img className="mb-3" src={context.user.avatar_url} />
                            <div className='d-flex justify-content-between aling-items-center'>
                                <Card.Title className='fs-6'>Followers: {context.user.followers}</Card.Title>
                                <Card.Title className='fs-6'>Following: {context.user.following}</Card.Title>
                            </div>
                        </CardBody>

                    </Col>
                    <Col xs={8}>
                        <CardBody>
                            <ListGroup className='flex-row flex-wrap'>
                                {context.userRepos.map(userRepo => <UserRepo key={userRepo.id} userRepoName={userRepo.name} userRepoUrl={userRepo.html_url} />
                                )}
                            </ListGroup>
                        </CardBody>
                    </Col>
                </Row>
            </Card>
        </>
    )
}

export default UserDetails

