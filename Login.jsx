import { useState } from "react";

function Login() {
  const [membershipId, setMembershipId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!membershipId || !password) {
      alert("Please enter your membership ID and password.");
      return;
    }

    window.location.href = "/dashboard";
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Community Library</h1>
        <p>Library Management System</p>

        <form onSubmit={handleSubmit}>
          <label>Membership ID</label>
          <input
            type="text"
            value={membershipId}
            onChange={(e) => setMembershipId(e.target.value)}
            placeholder="Enter membership ID"
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;