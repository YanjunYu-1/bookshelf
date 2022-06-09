import Book from '../components/Book'

const BookList = ({books}) => {
    // console.log(books)
    // console.log(typeof books)
    return (
        <ol className="books-grid">
            {books.map((book)=>(
                <Book key={book.id} book={book} />
            ))}
        </ol>
    );
}

export default BookList;