import React from 'react';
import logo from './logo.svg';
import './App.css';
import weekDays from "./weekDays";
import TodoContainer from "./Todo/TodoContainer";

class App extends React.Component{
    state = {
        todosWeekDays: weekDays
    };
    render() {

        const items = this.state.todosWeekDays
            .map( item => (
                <TodoContainer
                    key={item.id}
                    day={item.day}
                    todo={item.tasks}
                />
            ))

        return (
            <div className="App">
                <header className="App-header">
                    {items}
                </header>
            </div>
        );
    }

  }

export default App;
