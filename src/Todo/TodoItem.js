import React from 'react';

function TodoContainer(props) {

    return (
        <div className="todo-list">
            <div>
                <p>{props.name}</p>
                <input type="checkbox" value={props.isComplete}/>
            </div>
        </div>
    )
}
export default TodoContainer;