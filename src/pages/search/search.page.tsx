import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SearchPage = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=flowers&filter=free-ebooks&key=AIzaSyDSOa8Fi0MjJ0I3LVZXSRmFRuLkcOyp8go`
      );
      const data = await response.json();
      setBooks(data.items.slice(0, 10)); 
      console.log("DATA",data.items.slice(0, 10));
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    }
  };

  const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchTerm(e.target.value);
  };

  return (
    <React.Fragment>
      <section className="search-page_section">
        <input
          type="text"
          className="section__input"
          placeholder="Поиск книги..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        
        {/* <div className="book-list">
          {books.length > 0 ? (
            books.map((book) => (
              <div key={book.id} className="book-item">
                <h3>{book.volumeInfo.title}</h3>
                <p>{book.volumeInfo.authors?.join(", ")}</p>
              </div>
            ))
          ) : (
            <p>Книги не найдены</p>
          )}
        </div> */}
      </section>
    </React.Fragment>
  );
};

export default SearchPage;
