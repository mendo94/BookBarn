import React, { Component } from "react";

class BookSave extends Component {
  constructor() {
    super();
    this.state = {
      //   title: "",
      //   genre: "",
      //   publisher: "",
      //   year: "",
      //   imageURL: "",
    };
  }

  handleTextChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSaveBook = async () => {
    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    };
    try {
      const response = await fetch("http://localhost:8080/", settings);
      const books = await response.json();
      if (books.success) {
        this.props.onSave();
      }
    } catch (error) {
      console.log(error);
    }
  };

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

  render() {
    return (
      <div>
        <label htmlFor="title">Title of Book:</label>
        <input type="text" name="title" onChange={this.handleTextChange} />
        <label htmlFor="genre">Book Genre</label>
        <input type="text" name="genre" onChange={this.handleTextChange} />
        <label htmlFor="publisher">Publisher</label>
        <input type="text" name="publisher" onChange={this.handleTextChange} />
        <label htmlFor="year">Year</label>
        <input type="text" name="year" onChange={this.handleTextChange} />
        <label htmlFor="imageURL">Add image</label>
        <input type="text" name="imageURL" onChange={this.handleTextChange} />
        <button onClick={this.handleSaveBook}>Add Book</button>
      </div>
    );
  }
}

export default BookSave;
