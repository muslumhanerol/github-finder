import React from 'react'
import { ListGroupItem, NavLink } from 'react-bootstrap'

const UserRepo = ({ userRepoName, userRepoUrl }) => {
    return (
        <>
            <ListGroupItem className='w-auto' action={true} href={userRepoUrl} target='_blank' >
                {userRepoName}
            </ListGroupItem>
        </>
    )
}

export default UserRepo