import React, { useContext } from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../Contexts/AppContext'

const User = ({ user }) => { //Users.js de değişken olan user ı burada karşıladık.
    const context = useContext(AppContext);
    const lgcol = context.user.login ? 4 : 2;
    const mdcol = context.user.login ? 6 : 3;
    const smcol = context.user.login ? 12 : 6;


    return (
        <>
            <Col lg={lgcol} md={mdcol} sm={smcol} className='mb-2'>
                <Card>
                    <Card.Img src={user.avatar_url} />
                    <Card.Body>
                        <Card.Title>
                            {/* Kullanıcı Adı. */}
                            <h6 className='display-6 fs-6 fw-normal text-primary'>{user.login}</h6>
                        </Card.Title>
                        <a href={user.html_url} className='btn btn-primary btn-sm text-white mt-2' target='_blank'>Profile</a>
                        <button type='button' onClick={() => { context.getUser(user.login) }} className="btn btn-link btn-sm">Details</button>
                    </Card.Body>
                </Card>
            </Col>

        </>
    )
}

export default User