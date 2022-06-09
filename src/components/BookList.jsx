import Book from '../components/Book'
const BookList = () => {
    return (
        <ol className="books-grid">
            <Book />
            <Book />
            <Book />
            <Book />
        </ol>
    );
}

export default BookList;