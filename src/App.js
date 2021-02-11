import React, {useState} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import {Login} from "./components/Login";
import {TodoApp} from "./components/TodoApp";

const App = (props) => {

    localStorage.clear();
    localStorage.setItem("Username", "juan.frasica@mail.escuelaing.edu.co");
    localStorage.setItem("Password", "1234");

    const [isLoggedInState, setIsLoggedInState] = useState(localStorage.getItem("isLoggedIn"));

    const handleSuccessfullyLogin = (e) => {
        //alert("Bienvenido");
        setIsLoggedInState(true);
        localStorage.setItem("isLoggedIn", true);
    }

    const handleFailedLogin = (e) => {
        alert("Usuario o Clave Incorrectos");
        setIsLoggedInState(false);
        localStorage.setItem("isLoggedIn", false);
    }

    const LoginView = () => (
        <Login successfully={handleSuccessfullyLogin} failed={handleFailedLogin}/>
    );

    const TodoAppView = () => (
        <TodoApp/>
    );

    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">TODO React App</h1>
                </header>

                <br/>
                <br/>

                <ul>
                    <li><Link to="/">Login</Link></li>
                    {isLoggedInState && (<li><Link to="/todo">Todo</Link></li>)}
                </ul>
                <div>
                    <Route exact path="/" component={LoginView}/>
                    {isLoggedInState && (<Route path="/todo" component={TodoAppView}/>)}
                </div>
            </div>
        </Router>
    );
}

export default App;
