import React, { useState } from 'react';


function BestBooks (){
  const [books, setBooks] = useState([])
  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  
  async function getBestBooks() {
      let Getbooks = await axios.get(`http://localhost:3001/books?=${books}`)
      setBooks(books.data)
      console.log(books.data)
    }
    getBestBooks();
  
  /* TODO: render all the books in a Carousel */

    return (
        <>
      <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

      {books.length ? (
        <Carousel>
          {books.map(book => (
            <div key={book._id}>
              <h3>{book.title}</h3>
              <p>{book.description}</p>
              <p>Status: {book.status}</p>
            </div>
          ))}
        </Carousel>
      ) : (
        <h3>No Books Found :</h3>
      )}
    </>
  );
}

export default BestBooks;