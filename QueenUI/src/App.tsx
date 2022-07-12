import React from 'react';
import './App.scss';
import {NavBar} from "./Components/NavBar/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import {AppRoutes} from "./AppRoutes/AppRoutes";

const App: React.FC = () => {
    return (
        <div className="App">
            <Router>
                <NavBar />
                <div className='content-outer'>
                    <AppRoutes />
                </div>
            </Router>
        </div>
    );
};

export default App;
