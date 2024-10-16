import BookStore from "./BookStore"
import './Book.css'
// {
//     "book": {
//         "name": "Math ",
//         "price": 100
//     }
// }
export default function Book({book}) {
    const { name, price } = book;
    return (
        <div className="book">
             <li>book name: {name} price: { price}</li>
       </div>
    )
}