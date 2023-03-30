import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import useUsers from "./hooks/useUser";
import apiClient, { CanceledError } from "./services/api-client";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: number;
  website: string;
}

function App() {
  const { users, error, isLoading, setUsers, setError } = useUsers();

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    apiClient.delete("/users/" + user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };
  const addUser = () => {
    const originalUsers = [...users];
    const newUser = {
      id: 0,
      username: "sohan",
      name: "SOHANJAIN",
      email: "snsohanjain@gmail.com",
      phone: 8880638514,
      website: "sohanjain.cloud",
    };
    setUsers([newUser, ...users]);
    apiClient
      .post("/users/", newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };
  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));
    apiClient.patch("/users/" + user.id, updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  return (
    <>
      <h1>Dashboard</h1>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb3" onClick={addUser}>
        Add
      </button>
      <table className="table  table-striped">
        <thead>
          <tr>
            <th>Username</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
              <td>
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => updateUser(user)}
                >
                  Update
                </button>
              </td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  type="submit"
                  onClick={() => deleteUser(user)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default App;
