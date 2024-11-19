import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../Contexts/AppContext';

const UserDetailsPage = () => {
    const Contexts = useContext(AppContext);
    const { login } = useParams(); //useParams dışarı çıkarttığı nesnenin içindeki login i alıp değişken içine attım.

    useEffect(() => {
        //1.Burada login App.js 28. satıra gidecek ve logini userName atayacak.
        Contexts.getUser(login);
    })
    return (
        <div>UserDetailsPage</div>
    )
}

export default UserDetailsPage

