// import { useState } from 'react'

// function List({ todos }) {

//     const [filterText, setFilterText] = useState('');

//     const filtered = todos.filter((item) => {
//         return Object.keys(item).some((key) =>
//             item[key]
//                 .toString()
//                 .toLowerCase()
//                 .includes(filterText.toLowerCase())
//         );
//     });

//     console.log('filtered', filtered);
//     return (
//         <div ClassName='main'>
//             <input class="toggle-all" type="checkbox" />
//             <label for="toggle-all">
//                 Mark all as complete
//             </label>

//             <ul ClassName="todo-list">
//                 {
//                     filtered.map((todos, i) => (
//                         <li key={i}>
//                             <span>{todos.todo}</span>
//                         </li>

//                     ))
                
//                 <button ClassName="destroy"></button>



//             </ul>
//         </div>
//     )
// };

// export default List;
