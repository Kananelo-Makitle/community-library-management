import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom"
<BrowserRouter basename = "/community-library-management/">
</BrowserRouter>

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Books from "./pages/Books";
import Transactions from "./pages/Transactions";
import Users from "./pages/Users";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <>
              <nav>
                <Link to="/dashboard">Dashboard</Link>{" | "}
                <Link to="/books">Books</Link>{" | "}
                <Link to="/transactions">Transactions</Link>{" | "}
                <Link to="/users">Users</Link>
              </nav>
              <Dashboard />
            </>
          }
        />

        <Route
          path="/books"
          element={
            <>
              <nav>
                <Link to="/dashboard">Dashboard</Link>{" | "}
                <Link to="/books">Books</Link>{" | "}
                <Link to="/transactions">Transactions</Link>{" | "}
                <Link to="/users">Users</Link>
              </nav>
              <Books />
            </>
          }
        />

        <Route
          path="/transactions"
          element={
            <>
              <nav>
                <Link to="/dashboard">Dashboard</Link>{" | "}
                <Link to="/books">Books</Link>{" | "}
                <Link to="/transactions">Transactions</Link>{" | "}
                <Link to="/users">Users</Link>
              </nav>
              <Transactions />
            </>
          }
        />

        <Route
          path="/users"
          element={
            <>
              <nav>
                <Link to="/dashboard">Dashboard</Link>{" | "}
                <Link to="/books">Books</Link>{" | "}
                <Link to="/transactions">Transactions</Link>{" | "}
                <Link to="/users">Users</Link>
              </nav>
              <Users />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;