import React from "react";
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
    render() {
        const navBarStyle = {
            paddingRight: "30px"
        };

        return (
            <nav class="navbar navbar-inverse navbar-fixed-top">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <Link to="/" class="navbar-brand">Travel Shop</Link>
                         <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                    </div>
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav">
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Categories <span class="caret"></span></a>
                                <ul class="dropdown-menu">
                                    <li><a href="#">Electronics &amp; Gadgets</a></li>
                                    <li><a href="#">Women's Fashion</a></li>
                                    <li><a href="#">Men's Fashion</a></li>
                                </ul>
                            </li>
                        </ul>
                        <ul class="nav navbar-nav navbar-right" style={navBarStyle}>
                            <li><Link to="login">Login</Link></li>
                            <li><Link to="signup">Sign Up</Link></li>
                        </ul>  
                    </div>
                </div>
            </nav>
        );
    }
}