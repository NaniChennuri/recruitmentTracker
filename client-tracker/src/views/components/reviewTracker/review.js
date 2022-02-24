import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './review.scss';
import { REVIEW_TABLE_COLS } from "../../../models/skilledCols";
import { reviewSkills } from "../../../middleware/sampleAPI";

const Review = (props) => {
    const dispatch = useDispatch();
    const reviewData = useSelector((state) => state.exampleReducer.reviewData);
    const [startDate, setStartDate] = useState('');

    const handleChange = (event) => {
        var dd = String(event.getDate()).padStart(2, '0');
        var mm = String(event.getMonth() + 1).padStart(2, '0');
        var yyyy = event.getFullYear();

        var date = mm + '-' + dd + '-' + yyyy;

        const payload = {
            "Skill": props.skillDetails.skill,
            "skillId": props.skillDetails.skillId,
            "date": date,
        };

        dispatch(reviewSkills(payload));

        setStartDate(event);
    }

    const headerItems = () => {
        let header = [];
        for (var key in REVIEW_TABLE_COLS) {
            let current = key;
            header.push(
                <th key={current}>
                    {REVIEW_TABLE_COLS[key]["displayName"]}
                </th>
            )
        }
        return header;
    }

    const getTbody = () => {
        let rows = [];
        for (let row in reviewData) {
            const tbody = reviewData[row];
            let item = (
                <tr key={tbody.id}>
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
        <div className='reviewModal'>
            <div className='datePicker'>
                <label className='label-cnt'>Select a valid Date for Review: </label>
                <DatePicker selected={startDate} onChange={(e) => handleChange(e)} />
            </div>

            <div className='reviewTable-cnt'>
                <table className='reviewTable'>
                    <thead>
                        <tr>{headerItems()}</tr>
                    </thead>
                    <tbody>
                        {getTbody()}
                    </tbody>
                </table>
            </div>

            <div className='btn-grp'>
                <button
                    className='cancel-btn'
                    onClick={() => {
                        props.onClose()
                    }}
                >
                    Cancel
                </button>
            </div>
        </div>
    )
};

export default Review;