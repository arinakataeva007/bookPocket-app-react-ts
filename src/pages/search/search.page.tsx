import React, { useState, useEffect } from "react";
import axios from "axios";
import WelcomePage from "../welcome/welcome.page";
import BookInfoPopUp from "../book-info/book-info.page";
import './search.scss';
import { useNavigate } from "react-router-dom";

const SearchPage = ({ inputSearch, onOpenBook }: any) => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState(inputSearch);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}+intitle`);
      setBooks(response.data.items.slice(0, 10));
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    fetchBooks();
  };

  const openBooksInfo = (id: string) => {
    navigate("/book");
    onOpenBook(id);
  };

  return (
    <React.Fragment>
      <section className="search-page_section">
        <h2 className="search-page_section__title">BookPocket</h2>
        <input
          type="text"
          className="search-page_section__input"
          placeholder="Поиск..."
          value={searchTerm}
          onChange={handleInputChange}
        />
      </section>
      <section className="books-list_section">
        {books.map((book: any) => (
          <div
            key={book.id}
            className="book-item"
            onClick={() => openBooksInfo(book.id)}
          >
            <img
              src={book.volumeInfo.imageLinks?.thumbnail}
              alt={book.volumeInfo.title}
              className="book-item__image"
            />
            <div className="book-item__info">
              <h3 className="book-item__info__title">{book.volumeInfo.title}</h3>
              <p className="book-item__info__author">{book.volumeInfo.authors?.join(", ")}</p>
              <p className="book-item__info__description">{book.volumeInfo.description}</p>
            </div>
          </div>
        ))}
      </section>
    </React.Fragment>
  );
};

export default SearchPage;
