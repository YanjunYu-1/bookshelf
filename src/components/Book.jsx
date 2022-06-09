const Book = ({title}) => {
    // console.log(book)
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: "128px",
                            height: "193px",
                            backgroundImage: "url(http://books.google.com/books/content?id=bUybAgAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api)"
                        }}

                    ></div>
                    <div className="book-shelf-changer">
                        <select>
                            <option value="move" disabled="">Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">Rob Huddleston</div>
            </div>
        </li>
    );
}

export default Book;