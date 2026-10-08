import { useEffect, useState } from "react";

function Dashboard() {
  const [totalBooks, setTotalBooks] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [lowStock, setLowStock] = useState(0);

  useEffect(() => {
    const books = JSON.parse(localStorage.getItem("books")) || [];
    const users = JSON.parse(localStorage.getItem("users")) || [];

    setTotalBooks(books.length);
    setTotalUsers(users.length);

    const lowStockBooks = books.filter(
      (book) => Number(book.quantity) <= 2
    );

    setLowStock(lowStockBooks.length);
  }, []);

  return (
    <div className="dashboard-page">
      <h1>Library Dashboard</h1>

      <p className="welcome-text">
        Welcome to the Community Library Management System.
      </p>

      <hr />

      <h2>Library Statistics</h2>

      <div className="dashboard-cards">

        <div className="dashboard-card">
          <h3>Total Books</h3>
          <p>{totalBooks}</p>
        </div>

        <div className="dashboard-card">
          <h3>Total Users</h3>
          <p>{totalUsers}</p>
        </div>

        <div className="dashboard-card low-stock-card">
          <h3>Low Stock Books</h3>
          <p>{lowStock}</p>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;