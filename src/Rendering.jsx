// export default function Rendering({ tasks, isComplete, price }) {
//     if(isComplete){
//         return <p> Products : {tasks}  and price : {price}</p>
//     }
//     else{
//         return <p> N/A (Not Available this Products)</p>
//     }
// }
// export default function Rendering({ tasks, isComplete, price }) {
//     return (
//         <p>{isComplete ? 'Finished : ' : 'Work on it : ' }{tasks}</p>
//     )
// }
export default function Rendering({ tasks, isComplete }) {
    return (
        <p>{tasks} {isComplete && 'Finished this work'}</p>
    )
}