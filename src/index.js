import React from 'react';
import ReactDOM from "react-dom";

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';
import ItemStatusfilter from './components/item-status-filter';


const todoData = [
    {label: "Drink Coffe", important: false, id: 1},
    {label: "Make Awesome App" , important: true, id: 2},
    {label: "Have a lunch" ,id: 3}   
]
//login = !login;
const App = () => {
    
    return (
        <div>
            <AppHeader />
            
            <SearchPanel /> <ItemStatusfilter />
            
            <TodoList todos = {todoData} />


        </div>
    );
}
//console.log(App.React) ;
ReactDOM.render(<App />, document.getElementById('root'));
