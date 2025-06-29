let books = []; // in-memory store

exports.getAllBooks = (req, res) => {
  res.status(200).json(books);
};

exports.addBook = (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ error: "Title and author are required" });
  }
  const newBook = {
    id: books.length + 1,
    title,
    author,
  };
  books.push(newBook);
  res.status(201).json(newBook);
};

exports.updateBook = (req, res) => {
  const id = parseInt(req.params.id);
  const { title, author } = req.body;
  const book = books.find((b) => b.id === id);
  if (!book) {
    return res.status(404).json({ error: "Book not found" });
  }
  if (title) book.title = title;
  if (author) book.author = author;
  res.status(200).json(book);
};

exports.deleteBook = (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex((b) => b.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "Book not found" });
  }
  const deleted = books.splice(index, 1);
  res.status(200).json({ message: "Book deleted", book: deleted[0] });
};
