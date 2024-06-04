import React from 'react';
import './App.css';
import UserForm from './components/UserForm';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>User Details Form</h1>
                <UserForm />
            </header>
        </div>
    );
}

export default App;
