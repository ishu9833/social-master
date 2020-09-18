import React, { useEffect, useState } from 'react';
import UserBody from '../UserBody/UserBody';

const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])
    return (
        <div>
            {
                users.map( user => <UserBody user={user}></UserBody>)
            }
        </div>
    );
};

export default Home;