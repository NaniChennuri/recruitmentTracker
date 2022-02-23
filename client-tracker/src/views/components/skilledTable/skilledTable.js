import React, { useState, useEffect } from 'react';
import './skilledTable.scss';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReviewTracker from '../reviewTracker/review';
import Modal from '../modal/modal';
import { TABLE_COLS } from "../../../models/skilledCols";

const SkilledTable = (props) => {
    const [data, setData] = useState([]);
    const [timer, setTimer] = useState(null);
    const [isDataUpdated, setIsDataUpdated] = useState(false);
    const [isModal, setModal] = useState(false);

    useEffect(() => {
        setData(props.skillsData);
    }, [props.skillsData]);

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

    const handleChange = (type, row, event) => {
        let updatedData = event.currentTarget.textContent;
        clearTimeout(timer);
        setTimer(
            setTimeout(() => {
                let tdata = [...data];
                tdata[row][type] = updatedData;
                setData(tdata);
                setIsDataUpdated(true);
            }, 1000)
        );
    }

    const getTbody = () => {
        let rows = [];
        for (let row in data) {
            const tbody = data[row];
            let item = (
                <tr key={tbody.id}>
                    <td className='skillHeader' onClick={() => setModal(true)}>{tbody.technology}</td>
                    <td>
                        <DatePicker selected={new Date(tbody.oDate)} disabled/>
                    </td>
                    <td contentEditable="true" onInput={(e) => handleChange("open_positions", row, e)}>{tbody.open_positions}</td>
                    <td contentEditable="true" onInput={(e) => handleChange("interviewed", row, e)}>{tbody.interviewed}</td>
                    <td contentEditable="true" onInput={(e) => handleChange("shortlist", row, e)}>{tbody.shortlist}</td>
                    <td contentEditable="true" onInput={(e) => handleChange("offer", row, e)}>{tbody.offer}</td>
                    <td contentEditable="true" onInput={(e) => handleChange("Status", row, e)}>{tbody.Status}</td>
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
            {
                isDataUpdated
                &&
                <button className='updateBtn'>Update</button>
            }
            <Modal
                modalWidth="md"
                dividers={false}
                showModal={isModal}
                heading={"Review Tracker"}
                handleClose={() => {
                    setModal(false);
                }}
                noHeader={false}
            >
                <ReviewTracker />
            </Modal>
        </div>
    )
};

export default SkilledTable;