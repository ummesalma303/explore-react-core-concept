import Book from "./Book";
export default function BookStore({ book }) {
    console.log(book);
    return (
        <div>
            <h2>Available Book : {book.length}</h2>
            {
                book.map(books=><Book book={books}></Book>)
            }
        </div>
    )
}