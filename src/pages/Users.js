import React, { useEffect, useState } from 'react'

function Users() {

    const [users, setUsers] = useState([])


    useEffect(async () => {

        // localhost ile test yaparken localhost önüne http protokülü yazmayı unutmayalalım fetch hata veriyor.

        let response = await fetch('http://localhost:5000/users');
        let data = await response.json();

        console.log('data', data);

        setUsers(data);


    }, [])


    return (
        <div>
            {
                users.map((user) => {
                    return <div>
                        {user.name} {user.surname}

                        {user?.bestFriends && <ul>
                            {
                                user.bestFriends.map((friend) => {
                                    return <li>{friend}</li>
                                })
                            }
                        </ul>}
                    </div>
                })
            }

        </div>
    )
}

export default Users