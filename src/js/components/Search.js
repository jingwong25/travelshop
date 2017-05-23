import React from "react";

export default class Search extends React.Component {
    render() {
        const searchBarStyle = {
            margin: "20px"
        };

        return (
            <div class="input-group" style={searchBarStyle}>
                <span class="input-group-addon">
                    <span class="glyphicon glyphicon-search"></span>
                </span>
                <input type="text" class="form-control" placeholder="Country" />
                <span class="input-group-btn">
                    <button class="btn btn-primary" type="button">Search</button>
                </span>
            </div>
        );
    }
}