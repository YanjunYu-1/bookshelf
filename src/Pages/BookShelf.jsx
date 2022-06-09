import BookShelf from '../components/BookShelf'
import BookList from '../components/BookList'

const BookShelfPage = ({books}) => {
    const filteredBooks =(shelf)=>{
        return books.filter((book)=>book.shelf ===shelf);
      };

    return (
        <>
            <div className="app">
                <div className="list-books">
                    <div className="list-books-title"><h1>MITTReads</h1></div>
                    <div className="list-books-content">
                        <div>
                            <BookShelf name={"Currently Reading"}>
                                <BookList books={filteredBooks("currentlyReading")} />
                            </BookShelf>
                            <BookShelf name={"Want To Read"}>
                                <BookList books={filteredBooks("wantToRead")} />
                            </BookShelf>
                            <BookShelf name={"Read"}>
                                <BookList books={filteredBooks("read")} />
                            </BookShelf>
                            <BookShelf name={"My library"}>
                                <BookList books={filteredBooks("none")} />
                            </BookShelf>
                        </div>
                    </div>
                    <div className="open-search"><a href="search.html">Add a book</a></div>
                </div>
            </div>
        </>
    );
}

export default BookShelfPage;