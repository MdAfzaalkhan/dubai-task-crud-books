// import React from 'react';
import styles from "./BookTable.module.css";

const BookTable = ({ books, onEdit, onDelete }) => (
  <table className={styles.table}>
    <thead>
      <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Genre</th>
        <th>Published Year</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {books.map((book, index) => (
        <tr key={index}>
          <td>{book.title}</td>
          <td>{book.author}</td>
          <td>{book.genre}</td>
          <td>{book.publishedYear}</td>
          <td>
            <button onClick={() => onEdit(index)} className={styles.editButton}>
              Edit
            </button>
            <button
              onClick={() => onDelete(index)}
              className={styles.deleteButton}
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default BookTable;
