// import React, { useState } from "react";
// import BookForm from "./components/BookForm";
// import BookTable from "./components/BookTable";
// import styles from "./App.module.css";

// const App = () => {
//   const initialBooks = [
//     {
//       title: "Sample Book 1",
//       author: "Author 1",
//       genre: "Fiction",
//       publishedYear: 2020,
//     },
//     {
//       title: "Sample Book 2",
//       author: "Author 2",
//       genre: "Non-fiction",
//       publishedYear: 2018,
//     },
//   ];

//   const [books, setBooks] = useState(initialBooks);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editingIndex, setEditingIndex] = useState(null);

//   const handleAddBook = (newBook) => {
//     setBooks([...books, newBook]);
//   };

//   const handleDeleteBook = (index) => {
//     const updatedBooks = [...books];
//     updatedBooks.splice(index, 1);
//     setBooks(updatedBooks);
//   };

//   const handleEditBook = (index) => {
//     setIsEditing(true);
//     setEditingIndex(index);
//   };

//   const handleUpdateBook = (updatedBook) => {
//     const updatedBooks = [...books];
//     updatedBooks[editingIndex] = updatedBook;
//     setBooks(updatedBooks);
//     setIsEditing(false);
//     setEditingIndex(null);
//   };

//   return (
//     <div className={styles.container}>
//       <h1>Book Collection</h1>
//       {isEditing ? (
//         <BookForm
//           className={styles.formContainer}
//           onSubmit={handleUpdateBook}
//           initialBook={books[editingIndex]}
//         />
//       ) : (
//         <BookForm
//           className={styles.formContainer}
//           onSubmit={handleAddBook}
//           initialBook={{}}
//         />
//       )}

//       <BookTable
//         books={books}
//         onDelete={handleDeleteBook}
//         onEdit={handleEditBook}
//       />
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";
import BookForm from "./components/BookForm";
import BookTable from "./components/BookTable";
import styles from "./App.module.css";

const App = () => {
  const [books, setBooks] = useState([
    {
      title: "Book 1",
      author: "Author 1",
      genre: "Genre 1",
      publishedYear: 2021,
    },
    {
      title: "Book 2",
      author: "Author 2",
      genre: "Genre 2",
      publishedYear: 2022,
    },
  ]);
  const [editIndex, setEditIndex] = useState(null);

  const addBook = (book) => {
    setBooks([...books, book]);
    setEditIndex(null);
  };

  const updateBook = (updatedBook) => {
    const updatedBooks = [...books];
    updatedBooks[editIndex] = updatedBook;
    setBooks(updatedBooks);
    setEditIndex(null);
  };

  const deleteBook = (index) => {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
  };

  return (
    <div className={styles.container}>
      <h1>Book Collection</h1>
      <BookForm
        onSubmit={editIndex !== null ? updateBook : addBook}
        bookToEdit={editIndex !== null ? books[editIndex] : null}
      />
      <br />
      <BookTable books={books} onEdit={setEditIndex} onDelete={deleteBook} />
    </div>
  );
};

export default App;
