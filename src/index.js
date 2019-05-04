import React from 'react';
import ReactDOM from "react-dom";

const TodoList =() => {

    const items =['Drinks','Learn React 1', 'Build Awesome App'];
    return(
        <ul>
            <li>{items[0]}</li>
            <li>{items[1]}</li>
        </ul>
    );
};

const AppHeader = () => {
    return <h1>My Todo List</h1>
}

const SearchPanel =() => {
    const searchText = 'Type here to search';
    const searchStyle ={
        fontSize : '25px'
    }
    return <input 
        style = {searchStyle}
        placeholder = {searchText} 
        disabled = {false}/>
}

const App = () => {

    const value = '<script> alert("") </script>';
    
    return (
        <div>
            {value}
            <AppHeader />
            <SearchPanel />
            <TodoList />
            <SearchPanel />
        </div>
    );
}
//console.log(App.React) ;

ReactDOM.render(<App />, document.getElementById('root'));