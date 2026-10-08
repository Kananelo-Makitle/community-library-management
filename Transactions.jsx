import { useEffect, useState } from "react";

function Transactions() {
    const [books, setBooks] = useState(() => {
  const savedBooks = localStorage.getItem("books");
  return savedBooks ? JSON.parse(savedBooks) : [];
});
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem("transactions");
    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });

  const [bookTitle, setBookTitle] = useState("");
  const [type, setType] = useState("Add Stock");
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    localStorage.setItem(
      "transactions",
      JSON.stringify(transactions)
    );
  }, [transactions]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!bookTitle || !quantity) {
  alert("Please fill in all fields.");
  return;
}

const amount = Number(quantity);

if (amount <= 0) {
  alert("Quantity must be greater than 0.");
  return;


      const selectedBook = books.find(
  (book) => book.title === bookTitle
);

if (!selectedBook) {
  alert("Book not found.");
  return;
}


if (type === "Deduct Stock" && amount > selectedBook.quantity) {
  alert("You cannot deduct more books than are available.");
  return;
}

const updatedBooks = books.map((book) => {
  if (book.title === bookTitle) {
    const newQuantity =
      type === "Add Stock"
        ? book.quantity + amount
        : book.quantity - amount;

    return {
      ...book,
      quantity: newQuantity,
    };
  }

  return book;
});

setBooks(updatedBooks);
localStorage.setItem("books", JSON.stringify(updatedBooks));
    }

    const newTransaction = {
      id: Date.now(),
      bookTitle,
      type,
      quantity: Number(quantity),
      date: new Date().toLocaleDateString(),
    };

    setTransactions((currentTransactions) => [
      ...currentTransactions,
      newTransaction,
    ]);

    setBookTitle("");
    setType("Add Stock");
    setQuantity("");
  };

  return (
    <div>
      <h1>Transactions</h1>

      <form onSubmit={handleSubmit}>
        <label>Book Title</label>
        <br />
      <select
  value={bookTitle}
  onChange={(e) => setBookTitle(e.target.value)}
>
  <option value="">Select a book</option>

  {books.map((book) => (
    <option key={book.id} value={book.title}>
      {book.title} (Available: {book.quantity})
    </option>
  ))}
</select>

        <br /><br />

        <label>Transaction Type</label>
        <br />
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option>Add Stock</option>
          <option>Deduct Stock</option>
        </select>

        <br /><br />

        <label>Quantity</label>
        <br />
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Enter quantity"
          min="1"
        />

        <br /><br />

        <button type="submit">Save Transaction</button>
      </form>

      <hr />

      <h2>Transaction History</h2>

      {transactions.length === 0 ? (
        <p>No transactions recorded yet.</p>
      ) : (
        <ul>
          {transactions.map((transaction) => (
            <li key={transaction.id}>
              {transaction.date} — {transaction.bookTitle} —{" "}
              {transaction.type} — Quantity: {transaction.quantity}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Transactions;