import React, { useContext } from 'react'
import { AppContext } from '../Contexts/AppContext'

const Users = () => {
    const context = useContext(AppContext);//App.js 27.
    console.log(context);

    return (
        <>
            <div>{context.users[0].login}</div>

        </>
    )
}

export default Users