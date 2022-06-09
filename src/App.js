import {useState,useEffect} from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import {getBook} from './services/bookAPI'
import './App.css';
import BookShelfPage from './Pages/BookShelf'
import SearchPage from './Pages/Search'

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() =>{
    getBook().then((books)=>setBooks(books));
    // console.log(books);
  },[])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookShelfPage books={books} />}/>
        <Route path="/search" element={<SearchPage />} />

      </Routes>
    </Router>
  )
  
  
}

export default App;
