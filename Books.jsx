import { useEffect, useState } from "react";

function Books() {
  const [books, setBooks] = useState(() => {
    const savedBooks = localStorage.getItem("books");
    return savedBooks ? JSON.parse(savedBooks) : [];
  });

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

const handleDelete = (id) => {
    const updatedBooks =
    books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
};
const handleUpdate = (id) => {
  const book = books.find((book) => book.id === id);

  const newTitle = prompt("Enter the new book title:", book.title);
  const newAuthor = prompt("Enter the new author:", book.author);
  const newQuantity = prompt("Enter the new quantity:", book.quantity);

  if (!newTitle || !newAuthor || !newQuantity) {
    return;
  }

  const updatedBooks = books.map((book) =>
    book.id === id
      ? {
          ...book,
          title: newTitle,
          author: newAuthor,
          quantity: Number(newQuantity),
        }
      : book
  );

  setBooks(updatedBooks);
};
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !author || !quantity) {
      alert("Please fill in all fields.");
      return;
    }

    const newBook = {
      id: Date.now(),
      title,
      author,
      quantity: Number(quantity),
    };

    setBooks((currentBooks) => [...currentBooks, newBook]);

    setTitle("");
    setAuthor("");
    setQuantity("");
  };

  return (
    <div>
      <h1>Book Management</h1>

      <form onSubmit={handleSubmit}>
        <label>Book Title</label>
        <br />
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter book title"
        />

        <br /><br />

        <label>Author</label>
        <br />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Enter author"
        />

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

        <button type="submit">Add Book</button>
      </form>

      <hr />

      <h2>Books</h2>

      {books.length === 0 ? (
        <p>No books have been added yet.</p>
      ) : (
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <strong>{book.title}</strong> — {book.author} — Quantity:{" "}
              {book.quantity}{" "}

              <button onClick={() =>
              handleDelete(book.id)}>
                Delete
              </button>
              <button onClick={() =>
              handleUpdate(book.id)}>
                Update
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Books;