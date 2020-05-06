import React from "react";
import Search from "../Search";
import "./index.css";

class Header extends React.Component {
    render() {
        return (
            <div className="jumbotron text-center">
                <h1 className="display-4">Employee Directory</h1>
                <p className="lead">Seach For Employee</p>
                <Search handler={this.props.handler} />
            </div>
        )
    };
};

export default Header;