import React from 'react'
import { Card, Col } from 'react-bootstrap'

const User = ({ user }) => { //Users.js de değişken olan user ı burada karşıladık.
    return (
        <>
            <Col lg={2} md={3} sm={4} xs={6} className='mb-2'>
                <Card>
                    <Card.Img src={user.avatar_url} />
                </Card>
            </Col>

        </>
    )
}

export default User