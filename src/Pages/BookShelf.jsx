import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import BookShelf from '../components/BookShelf'
import BookList from '../components/BookList'
import { getBook,updateBook } from '../services/bookAPI'

const BookShelfPage = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getBook().then((books) => setBooks(books));
    }, [])

    const filteredBooks = (shelf) => {
        return books.filter((book) => book.shelf === shelf);
    };

    const updateBookHandler = (id,shelf)=>{
        updateBook(id,shelf)
            .then(()=>getBook())
            .then((books)=>setBooks(books))
    }

    return (
        <>
            <div className="app">
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MITTReads</h1>
                    </div>
                    <div className="list-books-content">
                        <div>
                            <BookShelf name={"Currently Reading"}>
                                <BookList 
                                    books={filteredBooks("currentlyReading")} 
                                    updateBook={updateBookHandler}
                                />
                            </BookShelf>
                            <BookShelf name={"Want To Read"}>
                                <BookList 
                                    books={filteredBooks("wantToRead")} 
                                    updateBook={updateBookHandler}
                                />
                            </BookShelf>
                            <BookShelf name={"Read"}>
                                <BookList 
                                    books={filteredBooks("read")} 
                                    updateBook={updateBookHandler}
                                />
                            </BookShelf>
                            <BookShelf name={"My library"}>
                                <BookList 
                                    books={filteredBooks("none")} 
                                    updateBook={updateBookHandler}
                                />
                            </BookShelf>
                        </div>
                    </div>
                    <div className="open-search">
                        <Link to={"/search"}>Add a book</Link>
                        {/* <a href="search.html">Add a book</a> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default BookShelfPage;