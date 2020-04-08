import React,{useState} from 'react';
import TodoItem from './TodoItem'
function TodoContainer(props) {
    let propTodos = props.todo;
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.propTodos.push({
                name :e.target.value,
            })
            // const [todo, setTodo] = useState(0);
            e.target.value = '';
        }
    };
    const todo = propTodos.map( item => {
        return (
            <TodoItem key={item.name} name={item.name} isComplete={item.completed} />
        )
    })


    return (
        <div className="todo-container">

            <div className="day-name">{props.day}</div>
            <div className="todos">
                {todo}
            </div>
            <input className="new-todo" type="text" onKeyDown={handleKeyDown} autoFocus/>
        </div>
    )
}
export default TodoContainer;