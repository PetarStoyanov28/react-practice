
import React, { useEffect, useState } from 'react';

const UsersList = ({ isLoading, setIsLoading }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.error('Грешка:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, [setIsLoading]);

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UsersList;
