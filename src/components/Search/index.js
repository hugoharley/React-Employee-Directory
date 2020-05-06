import React from "react";
import "./index.css";

class Search extends React.Component {
    noEnter = () => {
        return !(window.event && window.event.keyCode === 13);
    };

    render() {
        return (
            <form className="search">
                <div className="form-group text-center">
                    <input onChange={(e) => {
                        this.props.handler(e.target.value);
                    }}
                        onKeyPress={this.noEnter}
                        type="text"
                        className="form-contol"
                        placeholder="Employee Search"
                        id="employee" />
                </div>
            </form>
        )
    };
};

export default Search;