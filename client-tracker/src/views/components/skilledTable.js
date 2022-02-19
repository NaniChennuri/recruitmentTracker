import React from 'react';
import { TABLE_COLS } from "../../models/skilledCols";
import { TABLE_ROWS } from "../../models/skilledRows";
import './skilledTable.scss';

const SkilledTable = (props) => {

    const headerItems = () => {
        let header = [];
        for (var key in TABLE_COLS) {
            let current = key;
            header.push(
                <th key={current}>
                    {TABLE_COLS[key]["displayName"]}
                </th>
            )
        }
        return header;
    }

    const getTbody = () => {
        let rows = [];
        for(let row in TABLE_ROWS) {
            const tbody = TABLE_ROWS[row];
            let item = (
                <tr>
                    <td>{tbody.technology}</td>
                    <td>{tbody.oDate}</td>
                    <td>{tbody.open_positions}</td>
                    <td>{tbody.interviewed}</td>
                    <td>{tbody.shortlist}</td>
                    <td>{tbody.offer}</td>
                    <td>{tbody.Status}</td>
                </tr>
            );
            rows.push(item);
        }
        return rows;
    }

    return (
        <div className='skill'>
            <table className='skilledTable'>
                <thead>
                    <tr>{headerItems()}</tr>
                </thead>
                <tbody>
                    {getTbody()}
                </tbody>
            </table>
        </div>
    )
};

export default SkilledTable;