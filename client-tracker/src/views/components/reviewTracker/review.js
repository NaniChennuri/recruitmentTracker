import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './review.scss';

const Review = (props) => {
    const [startDate, setStartDate] = useState(new Date());

    const handleChange = (event) => {
        var dd = String(event.getDate()).padStart(2, '0');
        var mm = String(event.getMonth() + 1).padStart(2, '0');
        var yyyy = event.getFullYear();

        var date = mm + '-' + dd + '-' + yyyy;

        setStartDate(event);
    }

    return (
        <div className='reviewModal'>
            <div>
                <DatePicker selected={startDate} onChange={(e) => handleChange(e)} />
            </div>
        </div>
    )
};

export default Review;