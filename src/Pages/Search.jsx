import BookList from '../components/BookList'
import {Link} from 'react-router-dom'

const SearchPage = ({children}) => {
    return (
        <>
            <div className="app">
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link className="close-search" to={"/"}>
                            Close
                        </Link>
                        {/* <a  href="index.html">
                            Close
                        </a> */}
                        <div className="search-books-input-wrapper">
                            <input type="text" placeholder="Search by title or author"/>
                        </div>
                    </div>
                    <div className="search-books-results">
                        <div className="results-quantity">
                            Your search returned 10 results.
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}

export default SearchPage;