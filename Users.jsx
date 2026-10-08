import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("users");
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  const [membershipId, setMembershipId] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("Member");

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const handleDelete = (id) => {
    const updatedUsers =
    users.filter(() => user.id !== id);
    setUsers(updatedUsers);
  };
const handleUpdate = (id) => {
  const user = users.find((user) => user.id === id);

  const newMembershipId = prompt(
    "Enter the new membership ID:",
    user.membershipId
  );

  const newName = prompt(
    "Enter the new name:",
    user.name
  );

  const newRole = prompt(
    "Enter the new role (Member, Librarian, or Admin):",
    user.role
  );

  if (!newMembershipId || !newName || !newRole) {
    return;
  }

  const updatedUsers = users.map((user) =>
    user.id === id
      ? {
          ...user,
          membershipId: newMembershipId,
          name: newName,
          role: newRole,
        }
      : user
  );

  setUsers(updatedUsers);
};

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!membershipId || !name) {
      alert("Please enter the membership ID and name.");
      return;
    }

    const newUser = {
      id: Date.now(),
      membershipId,
      name,
      role,
    };

    setUsers((currentUsers) => [...currentUsers, newUser]);

    setMembershipId("");
    setName("");
    setRole("Member");
  };

  return (
    <div>
      <h1>Users</h1>

      <form onSubmit={handleSubmit}>
        <label>Membership ID</label>
        <br />
        <input
          type="text"
          value={membershipId}
          onChange={(e) => setMembershipId(e.target.value)}
          placeholder="Enter membership ID"
        />

        <br /><br />

        <label>Name</label>
        <br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />

        <br /><br />

        <label>Role</label>
        <br />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option>Member</option>
          <option>Librarian</option>
          <option>Admin</option>
        </select>

        <br /><br />

        <button type="submit">Add User</button>
      </form>

      <hr />

      <h2>Registered Users</h2>

      {users.length === 0 ? (
        <p>No users have been added yet.</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.membershipId} — {user.name} — {user.role}{" "}

              <button onClick={() =>
              handleDelete(user.id)}>
                Delete
              </button>
              <button onClick={() =>
              handleUpdate(user.id)}>
                Update
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Users;