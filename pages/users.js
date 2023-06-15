import { useEffect, useState } from 'react';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError('Something went wrong!');
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      <h1>List of Users</h1>
      {error && <div>{error}</div>}
      {users ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : (
        <p>No users found</p>
      )}
    </div>
  );
}
