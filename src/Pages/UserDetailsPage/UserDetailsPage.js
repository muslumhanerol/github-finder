import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetailsPage = () => {
    console.log(useParams());
    return (
        <div>UserDetailsPage</div>
    )
}

export default UserDetailsPage