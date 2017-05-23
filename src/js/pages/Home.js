import React from "react";
import Search from "../components/Search";
import Product from "../components/Product";

export default class Home extends React.Component {
    render() {
        const containerStyle = {
            margin: "60px"
        };
        
        return (
            <div>
                <Search/>
                <div class="row">
                    <Product/>
                    <Product/>
                    <Product/>
                </div>
            </div>
        );
    }
}