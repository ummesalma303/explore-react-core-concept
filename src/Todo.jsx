// export default function Todo({task,isDone}) {
//     task='i wanna sleep'
//     // props='i wanna '
//     // console.log(props);
//     return (
//         <li>Task:{task} { isDone?'well done':'try'}</li>
//     )
// }

// conditional rendering option 2
// export default function Todo({task,isDone}) {
//         if (isDone) {
//             return <li> Finished: {task}</li>
//         } else {
//             return <li>Try again: {task} </li>
//         }
// }

// conditional rendering option 3
// export default function Todo({task,isDone}) {
//     if (isDone) {
//         return <li> Finished: {task} ✔</li>
//     }
//     return <li>Try again: {task} 😭 </li>
// }



// conditional rendering option 4

// export default function Todo({task,isDone}) {
//     return <li> {task} {isDone?'✔':'🔄'}</li>
// }

// conditional rendering option 5
// export default function Todo({task,isDone}) {
//     return <li> {task} {isDone&& ': ✔'}</li>
// }


// conditional rendering option 6
// export default function Todo({task,isDone}) {
//     return <li> {task} {isDone|| ': Do it'}</li>    
// }


// conditional rendering option 7
export default function Todo({ task, isDone }) {
    let list;
    if (isDone) {
        list= <li>Finished: { task}</li>
    } else {
        list= <li>Do it: { task}</li>
    }   
    return list
}