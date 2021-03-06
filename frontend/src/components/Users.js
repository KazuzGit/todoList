import React from "react";
import { useParams } from "react-router-dom";

const UserItem = ({ user }) => {
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.username}</td>
      <td>{user.first_name}</td>
      <td>{user.last_name}</td>
      <td>{user.email}</td>
    </tr>
  );
};
const UserList = ({ users }) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <UserItem user={user} key={user.id.toString()} />
        ))}
      </tbody>
    </table>
  );
};

const UserListFilterId = ({ users }) => {
  let { id } = useParams();
  let filtered_items = users.filter((item) => item.id.toString() === id);
  return <UserList users={filtered_items} />;
};
export { UserList, UserListFilterId };
 