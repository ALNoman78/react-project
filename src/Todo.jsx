// export default function Todo ({task , isDone}) {
//     return (
//         <div style={{
//             margin : '12px',
//             padding : '20px',
//             border : '3px solid steelblue',
//             borderRadius : '12px'
//         }}>
//             <h3>This is Todo Component</h3>
//             <li>Todo : {task} and {isDone} </li>
//         </div>
//     )
// }
// conditional rendering option 1
// export default function Todo ({task , isDone}) {
//     if(isDone){
//         return <li>This work Complete : {task}</li>
//     }
//     else{
//         return <li> Error ! Work on it : {task}</li>
//     }
// }

// conditional rendering option 2
export default function Todo ({task , isDone}) {
    if(isDone){
        return <li>Finished : {task}</li>
    }
    return <li>Not Finished : {task}</li>
}