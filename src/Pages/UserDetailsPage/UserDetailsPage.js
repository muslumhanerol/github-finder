import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetailsPage = () => {
    const { login } = useParams(); //useParams dışarı çıkarttığı nesnenin içindeki login i alıp değişken içine attım.
    return (
        <div>UserDetailsPage</div>
    )
}

export default UserDetailsPage

