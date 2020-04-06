import React from "react";

const ToDoItem = props =>{
    return (
        <div className={`item${props.addedItem.completed ? 'completed' : ''}`}>
            <p>{props.addedItem.task}</p>
        </div>
    )
}