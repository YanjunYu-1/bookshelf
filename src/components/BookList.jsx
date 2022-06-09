import Book from '../components/Book'

const BookList = ({books}) => {
    // console.log(books)
    // console.log(typeof books)
    return (
        <ol className="books-grid">
           {books.map((book)=>{
            console.log("inside of Map");
            <Book/>
            console.log("after Book");
           })}
          
        </ol>
    );
}

export default BookList;