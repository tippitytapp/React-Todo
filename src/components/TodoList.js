// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Item from "./Todo";

const ToDoList = props => {
    return(
        <div className="todo-list">
            {props.tasks.map(item => (
                <Item key={item.id} task={item} toggleItem={props.toggleItem} />
            ))}
            <button className="clear-btn" onClick={props.clearCompleted}>Clear Completed</button>
        </div>
    );
};

export default ToDoList;