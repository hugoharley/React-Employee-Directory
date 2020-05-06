import React from "react";
import API from "../utils/API";
import Table from "./Table";
//import Header from "./Header";

class DataContainer extends React.Component {
    state = {
        employees: [],
        searchSate: "",
        order: "ascend"
    };

    componentDidMount = () => {
        this.getEmpList();
    }

    getEmpList = () => {
        API.getEmpList()
            .then(res => {
                this.setState({ results: res.data.results })

            }).catch(err => console.log(err));
    };

    changeOrderDirection = () => {
        this.state.order === "descend" ? this.setState({ order: "ascend" }) : this.setState({ order: "descend" });

    }

    compareFunc = (a, b) => {
        if (this.state.order === "ascend") {
            if (a.name.first < b.name.first) {
                return -1;
            }
            if (a.name.first > b.name.first) {
                return 1;
            }
            return 0;
        }
        else {
            if (a.name.first < b.name.first) {
                return 1;

            }
            if (a.name.first > b.name.first) {
                return -1;
            }
            return 0;
        }
    };

    getInputChange = value => {
        this.setState({ search: value })
    };
    render() {
        return (
            <div>
                <Header
                    handler={this.getInputChange} />
                <Table
                    query={this.state.search}
                    results={this.state.results}
                    compareFunc={this.compareFunc}
                    orderChange={this.changeOrderDirection} />
            </div>
        )
    };
};
export default DataContainer;