import Book from "./Book";
export default function BookStore ({nameOfBook}){
    console.log(nameOfBook);
    return (
        <div>
            <h2>Book : {nameOfBook.length}</h2>
            {
                nameOfBook.map((book) => <Book defineBook={book}></Book>)
            }
        </div>
    )
}