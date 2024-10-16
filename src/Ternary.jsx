// conditional rendering (recap option 1)
// export default function Ternary({ task, isComplete }) {
//     if(isComplete){
//         return <li> list items {task}</li>
//     }
//     return <li>N/A (NOT AVAILABLE)</li>
// }

// conditional rendering option 3
// export default function Ternary({ task, isComplete }) {
//     return isComplete ? <li>Task Completed {task}</li> : 'NOT AVAILABLE'
// }

// best practice for conditional rendering [FOR BEST PRACTICE]

// export default function ({task , isComplete}){
//     return (
//         <li>{isComplete === true? 'Finished ' : 'Work on it'} : {task}</li>
//     )
// }


// conditional rendering option 4

// export default function Ternary({ task, isComplete }) {
//     return (
//         <li>{task}  {isComplete === true && ': Done'}</li>
//     )
// }

// conditional rendering option 5
// export default function Ternary({ task, isComplete }) {
//     return (
//         <li>{task} {isComplete || ': Do it Now'}</li>
//     )
// }

// export default function Ternary({ task, isComplete }) {
//     let listItems ;
//     if(isComplete){
//         listItems = <li>Finished : {task}</li>
//     }else{
//         listItems = <li>Work on it {task}</li>
//     }
//     return listItems;
// }

export default function Ternary ({task, isComplete}) {
        if(isComplete){
            return <li>{task} Done</li>
        }else{
            return <li>{task} isn't completed</li>
        }
}