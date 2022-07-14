import React, { useState, useEffect } from "react";
import SignUp from "./components/SignUp";
import BookList from "./components/BookList";
import BookSave from "./components/BookSave";
import Menu from "./components/Menu";

function App() {
  // const [users, setUsers] = useState([])
  const [books, setBooks] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUser();
    getAllBooks();
  }, []);

  // fetchAllBooks = async () => {
  //   const response = await fetch("http://localhost:8080/");
  //   const books = await response.json();
  //   this.setState({
  //     books: books,
  //   });
  // };
  const getUser = () => {
    fetch("http://localhost:8080/registration")
      .then((response) => response.json())
      .then((users) => {
        setUsers(users);
      });
  };

  const getAllBooks = () => {
    // get all the books
    fetch("http://localhost:8080/")
      .then((response) => response.json())
      .then((books) => {
        setBooks(books);
      });
  };

  return (
    <div>
      <BookList books={books} />
    </div>
  );
}

export default App;
