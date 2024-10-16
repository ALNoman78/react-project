import './bookStore.css'
export default function Book ({defineBook}){
    const {name , price} = defineBook
    return (
        <div className='book'>
            <h3>Book : {name} </h3>
            <p>Price : {price}</p>
        </div>
    )
}