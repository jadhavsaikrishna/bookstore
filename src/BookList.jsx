import React, { useState, useEffect } from 'react';
import './BookList.css'; // Import the CSS file

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch('https://api.itbook.store/1.0/new');
      const data = await response.json();
      setBooks(data.books);
    } catch (error) {
      console.log('Error fetching books:', error);
    }
  };

  const handleSearch = (e) => {
    setSearchName(e.target.value);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchName.toLowerCase())
  );

  return (
    <div className='booklist-nametitle'>
      <h2><u>Book List</u></h2>
      <div className="search-bar">
        <input
          type="text"
          value={searchName}
          onChange={handleSearch}
          placeholder="Search by book title"
        />
      </div>
      <div className="book-container">
        {filteredBooks.map((book) => (
          <div key={book.isbn13} className="book-card">
            <img src={book.image} alt={book.title} className="book-image" />
            <div className="book-details">
              <h3>{book.title}</h3>
              <p>{book.subtitle}</p>
              <h4>{book.price}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
