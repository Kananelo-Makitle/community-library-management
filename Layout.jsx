import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <h1>Community Library</h1>

      <nav>
        <a href="/dashboard">Dashboard</a>{" "}
        <a href="/books">Books</a>{" "}
        <a href="/transactions">Transactions</a>{" "}
        <a href="/users">Users</a>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

export default Layout;