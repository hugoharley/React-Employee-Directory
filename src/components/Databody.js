import React from "react";

function Databody(props) {
    return (
        <tr>
            <th scope="row"><img alt={`${props.fullName}`} src={props.thumbnail} /></th>
            <td>{props.fullName}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td>{props.address}</td>
        </tr>
    )
};
export default Databody;