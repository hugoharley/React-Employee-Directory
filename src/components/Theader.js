import React from "react";

class Theader extends React.Component {
    render() {
        const headings = [
            {
                key: 1,
                name: "Thumbnail"
            },
            {
                key: 2,
                name: "Name"
            },
            {
                key: 3,
                name: "Address"
            },
            {
                key: 4,
                name: "Number"
            },
            {
                key: 5,
                name: "Email"
            }
        ];
        return (
            <thead>
                <tr>
                    {headings.map(header => (
                        <th key={header.key} scope="col" onClick={this.props.orderChange}>{header.name}</th>
                    ))}
                </tr>
            </thead>
        )
    };
};
export default Theader;