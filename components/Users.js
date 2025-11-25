'use client';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/features/users/usersSlice';

const Users = ({ users }) => {

    const users = useSelector((state) => state.users.users);
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Users;