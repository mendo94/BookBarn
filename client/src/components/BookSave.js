import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function BookSave() {
  const [book, setBook] = useState({});
  let navigate = useNavigate();

  const handleTextChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };
  const handleSaveBook = () => {
    fetch("http://localhost:8080/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          navigate("/");
        }
      });
  };

  // const handleSaveBook = async () => {
  //   const settings = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(book),
  //   };
  //   try {
  //     const response = await fetch("http://localhost:8080/", settings);
  //     const books = await response.json();
  //     if (books.success) {
  //       this.props.onSave();
  //       // navigate("/");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  //   handleSaveBook = () => {
  //     fetch("http://localhost:8080/", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(this.state),
  //     })
  //       .then((response) => response.json())
  //       .then((result) => {
  //         if (result.success) {
  //           this.props.onSave();
  //         }
  //       });
  //   };

  return (
    <div>
      <label htmlFor="title">Title of Book:</label>
      <input type="text" name="title" onChange={handleTextChange} />
      <label htmlFor="genre">Book Genre</label>
      <input type="text" name="genre" onChange={handleTextChange} />
      <label htmlFor="publisher">Publisher</label>
      <input type="text" name="publisher" onChange={handleTextChange} />
      <label htmlFor="year">Year</label>
      <input type="text" name="year" onChange={handleTextChange} />
      <label htmlFor="imageURL">Add image</label>
      <input type="text" name="imageURL" onChange={handleTextChange} />
      <button onClick={handleSaveBook}>Add Book</button>
    </div>
  );
}

export default BookSave;
