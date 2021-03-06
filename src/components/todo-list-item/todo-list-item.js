import React from 'react';
import "./todo-list-item.css"

const TodoListItem =( {label, important = false} ) => {
    const style ={
        color : important? 'tomato': 'black', 
        fontWeight: important? "bold" :"normal"
    };

    return (
    <span className = "todo-list-item">
        <span className = "todo-list-item-label"        
            style = {style}>
            { label }
        </span>
        <button type ="button" 
                className ="btn btn-outline succes btn-sm">
                <i className= "fa fa-trash-o" />
            </button>
            <button type ="button" 
                className ="btn btn-outline succes btn-sm">
                <i className= "fa fa-exclamation" />
            </button>
    </span>
    );
};

export default TodoListItem;
