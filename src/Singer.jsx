export default function Singer({singerDetails}){
    return (
        <div>
            <h3>Singer : {singerDetails.name}</h3>
            <p>Age : {singerDetails.age}</p>
        </div>
    )
}