const Book = ({book}) => {
    // console.log(book)
    const {imageLinks,title,authors,shelf}=book;
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: "128px",
                            height: "193px",
                            backgroundImage: `url(${imageLinks.thumbnail})`
                            // "url(http://books.google.com/books/content?id=bUybAgAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api)"
                        }}

                    ></div>
                    <div className="book-shelf-changer">
                        <select >
                            <option value="move" disabled="">Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{authors.join(",")}</div>
            </div>
        </li>
    );
}

export default Book;