import React, { useEffect, useState } from "react";
import "./book-info.scss";
import axios from "axios";

const BookInfo = ({ bookId }: any) => {
  const [bookInfo, setBookInfo] = useState<any>(null);

  useEffect(() => {
    fetchBooks();
  }, [bookId]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${bookId}`
      );
      setBookInfo(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    }
  };

  return (
    <React.Fragment>
      <div className="book-info-container">
        {bookInfo ? (
          <>
            <img
              src={bookInfo.volumeInfo.imageLinks?.thumbnail}
              alt={bookInfo.volumeInfo.title}
              className="book-item__image"
            />
            <div className="info-container">
              <h1 className="info-container__title">
                {bookInfo.volumeInfo.title}
              </h1>
              <p className="info-container__author">
                {bookInfo.volumeInfo.authors}
              </p>
              <div className="publish-info-container">
                <p className="info-container__publisher">
                  Издание:
                  {bookInfo.volumeInfo.publisher}
                </p>
                <p className="info-container__publishedDate">
                  Дата публикации:
                  {bookInfo.volumeInfo.publishedDate}
                </p>
              </div>
              <div className="pages-count">
                <p className="count-title">Количество страниц: </p>
                <p className="count-page">{bookInfo.volumeInfo.pageCount}</p>
              </div>
            </div>
            <div className="description-container">
              <p className="description">{bookInfo.volumeInfo.description}</p>
            </div>
          </>
        ) : (
          <p>Не выбрано ни одной книги</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default BookInfo;
