import {useState,useEffect} from 'react'
import {getBook} from './services/bookAPI'
import './App.css';
import BookShelf from './components/BookShelf'

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() =>{
    getBook().then((books)=>setBooks(books));
    console.log(books);
  },[])
  return (
    <>
      <div className="app">
        <div className="list-books">
          <div className="list-books-title"><h1>MITTReads</h1></div>
          <div className="list-books-content">
            <div>
              <BookShelf />
              <BookShelf />
              <BookShelf />
            </div>
          </div>
          <div className="open-search"><a href="search.html">Add a book</a></div>
        </div>
      </div>
    </>
  );
}

export default App;
