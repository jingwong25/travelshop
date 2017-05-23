import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

export default class App extends React.Component {
    render() {
        const containerStyle = {
            margin: "60px"
        };
        
        return (
            <Router>
                <div>
                    <Nav />
                    <div class="container" style={containerStyle}>
                        <Route exact path="/" component={Home}/>
                        <Route path="/login" component={Login} />
                        <Route path="/signup" component={Signup} />
                        <Footer/>
                    </div>
                </div>
            </Router>
        );
    }
}

