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
      <div className="book">
        {bookInfo ? (
          <>
            <img
              src={bookInfo.volumeInfo.imageLinks?.thumbnail}
              alt={bookInfo.volumeInfo.title}
              className="book-item__image"
            />
            <h1>{bookInfo.volumeInfo.title}</h1>
            <p>{bookInfo.volumeInfo.description}</p>
          </>
        ) : (
          <p>Не выбрано ни одной книги</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default BookInfo;
