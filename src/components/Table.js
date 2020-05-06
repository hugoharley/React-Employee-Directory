import React from "react";
import Theader from "./Theader";
import Databody from "./Databody";

function Table(props) {
    let query = props.query;
    return (
        <div className="header">
            <table className="table">
                <Theader
                    orderChange={props.orderChange} />
                <tbody>
                    {props.results.sort(props.compareFunc)
                        .filter(data => {
                            const fullName = `${data.name.first} ${data.name.last}`
                            if (!query) {
                                return data
                            } else if (fullName.toLowerCase().includes(query.toLowerCase())) {
                                return data
                            }
                        })
                        .map(employee => (
                            <Databody
                                thumnail={employee.picture.thumnail}
                                fullName={`${employee.name.first} ${employee.name.last}`}
                                address={`${employee.location.street.number} ${employee.location.street.name}`}
                                phone={employee.phone}
                                email={employee.email} />
                        ))}
                </tbody>
            </table>
        </div>
    )
};

export default Table;