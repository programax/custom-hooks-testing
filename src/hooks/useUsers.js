import { useState } from 'react';

function useUsers() {
    const [users, setUsers] = useState([]);

    const addUser = (user) => {
        // TODO...
        setUsers([...users, user]);
    };

    return { users, addUser };
}

export default useUsers;
