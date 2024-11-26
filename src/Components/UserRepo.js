import React from 'react'
import { ListGroupItem, NavLink } from 'react-bootstrap'

const UserRepo = ({ userRepoName, userRepoUrl }) => {
    return (
        <>
            <ListGroupItem action={true} href={userRepoUrl}>
                {userRepoName}
            </ListGroupItem>
        </>
    )
}

export default UserRepo