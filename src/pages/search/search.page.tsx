import React, { useState, useEffect } from "react";
import axios from "axios";
import WelcomePage from "../welcome/welcome.page";
import BookInfoPopUp from "../../components/book-info/book-info-popUp.component";
import './search.scss';
import { useNavigate } from "react-router-dom";

const SearchPage = ({ inputSearch, onOpenBook }: any) => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState(inputSearch);
  const defaultUrl = `https://www.googleapis.com/books/v1/volumes?q=${inputSearch}+intitle`;

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(defaultUrl);
      setBooks(response.data.items.slice(0, 10));
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const openBooksInfo = (id: string) => {
    navigate("/book");
    onOpenBook(id);
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
              <h3>{book.volumeInfo.title}</h3>
              <p>{book.volumeInfo.authors?.join(", ")}</p>
              <p>{book.volumeInfo.description}</p>
            </div>
          </div>
        ))}
      </section>
    </React.Fragment>
  );
};

export default SearchPage;
