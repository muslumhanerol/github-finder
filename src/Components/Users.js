import React, { useContext } from 'react'
import { AppContext } from '../Contexts/AppContext'

const Users = () => {
    const context = useContext(AppContext);//App.js 27.
    console.log(context);

    return (
        <>
            <div>
                {context.users.map(user => <p>{user.login}</p>)}
            </div>

        </>
    )
}

export default Users