import logo from './logo.svg';
import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";

function App() {

    const [msg, setMsg] = useState("hi");

    useEffect(() => {
        axios.get("/hello")
            // .then(response => console.log(response))
            .then(response => response.data)
            .then(msg => {
                setMsg(msg);
            });
    }, [])
    return (
        <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p> { msg } </p>
        </header>
        </div>
    );
}

export default App;
