// import React, { useState } from "react";
// import styles from "./BookForm.module.css";

// const BookForm = ({ onSubmit, initialBook }) => {
//   const [title, setTitle] = useState(initialBook.title || "");
//   const [author, setAuthor] = useState(initialBook.author || "");
//   const [genre, setGenre] = useState(initialBook.genre || "");
//   const [publishedYear, setPublishedYear] = useState(
//     initialBook.publishedYear || ""
//   );

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({ title, author, genre, publishedYear });
//   };

//   return (
//     <form onSubmit={handleSubmit} className={styles.formContainer}>
//       <input
//         type="text"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         placeholder="Title"
//         className={styles.inputField}
//       />
//       <input
//         type="text"
//         value={author}
//         onChange={(e) => setAuthor(e.target.value)}
//         placeholder="Author"
//         className={styles.inputField}
//       />
//       <input
//         type="text"
//         value={genre}
//         onChange={(e) => setGenre(e.target.value)}
//         placeholder="Genre"
//         className={styles.inputField}
//       />
//       <input
//         type="number"
//         value={publishedYear}
//         onChange={(e) => setPublishedYear(e.target.value)}
//         placeholder="Published Year"
//         className={styles.inputField}
//       />
//       <button type="submit" className={styles.submitButton}>
//         Update Book
//       </button>
//     </form>
//   );
// };

// export default BookForm;
import React, { useState } from "react";
import styles from "./BookForm.module.css";

const BookForm = ({ onSubmit, bookToEdit }) => {
  const [book, setBook] = useState(
    bookToEdit || { title: "", author: "", genre: "", publishedYear: "" }
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBook((prevBook) => ({ ...prevBook, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(book);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={book.title}
        onChange={handleChange}
        className={styles.inputField}
      />
      <input
        type="text"
        name="author"
        placeholder="Author"
        value={book.author}
        onChange={handleChange}
        className={styles.inputField}
      />
      <input
        type="text"
        name="genre"
        placeholder="Genre"
        value={book.genre}
        onChange={handleChange}
        className={styles.inputField}
      />
      <input
        type="number"
        name="publishedYear"
        placeholder="Published Year"
        value={book.publishedYear}
        onChange={handleChange}
        className={styles.inputField}
      />
      <button type="submit" className={styles.submitButton}>
        {bookToEdit ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default BookForm;
