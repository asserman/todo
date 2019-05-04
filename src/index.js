import React from 'react';
import ReactDOM from "react-dom";

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list.js';


const todoData = [
    {label: "Drink Coffe", important: false},
    {label: "Make Awesome App" , important: true},
    {label: "Have a lunch" }   
]
//login = !login;
const App = () => {
    
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList todos = {todoData} />
        </div>
    );
}
//console.log(App.React) ;
ReactDOM.render(<App />, document.getElementById('root'));
