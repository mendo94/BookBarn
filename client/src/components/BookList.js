import React from "react";

function BookList(props) {
  const bookItems = props.books.map((book) => {
    return (
      <div key={book.id}>
        <li>{book.title}</li>
        <li>{book.genre}</li>
        <li>{book.publisher}</li>
        <li>{book.year}</li>
        <li>
          <img src={book.imageURL} alt="" />
        </li>
      </div>
    );
  });
  return <ul>{bookItems}</ul>;
}

export default BookList;
