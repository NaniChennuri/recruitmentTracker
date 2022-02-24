import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import './skilledTable.scss';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReviewTracker from '../reviewTracker/review';
import Modal from '../modal/modal';
import { TABLE_COLS } from "../../../models/skilledCols";
import { updateSkills } from "../../../middleware/sampleAPI";

const SkilledTable = (props) => {
    const dispatch = useDispatch();
    const [data, setData] = useState([]);
    const [isDataUpdated, setIsDataUpdated] = useState(false);
    const [isModal, setModal] = useState(false);
    const [clickedSkill, setClickedSkill] = useState({ "skill": null, "skillId": null});

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
        let tdata = [...data];
        if(type === 'open_positions' || type === 'interviewed' || type === 'shortlist' || type === 'offer') {
            tdata[row][type] = parseInt(event.target.value);
        } else {
            tdata[row][type] = event.target.value;
        }
        setData(tdata);
        setIsDataUpdated(true);
    }

    const handleBtn = () => {
        dispatch(updateSkills(data));
        setIsDataUpdated(false);
    }

    const handleSkillClick = (skill, skillId) => {
        let temp = JSON.parse(JSON.stringify(clickedSkill));
        temp["skill"] = skill;
        temp["skillId"] = skillId;
        setClickedSkill(temp);
        setModal(true);
    }

    const getTbody = () => {
        let rows = [];
        for (let row in data) {
            const tbody = data[row];
            let item = (
                <tr key={tbody.id}>
                    <td className='skillHeader' onClick={() => handleSkillClick(tbody.technology, tbody.id)}>{tbody.technology}</td>
                    <td><DatePicker selected={new Date(tbody.oDate)} disabled/></td>
                    <td><input type="number" min="0" onChange={(e) => handleChange("open_positions", row, e)} value={tbody.open_positions}/></td>
                    <td><input type="number" min="0" onChange={(e) => handleChange("interviewed", row, e)} value={tbody.interviewed}/></td>
                    <td><input type="number" min="0" onChange={(e) => handleChange("shortlist", row, e)} value={tbody.shortlist}/></td>
                    <td><input type="number" min="0" onChange={(e) => handleChange("offer", row, e)} value={tbody.offer}/></td>
                    <td>
                        <select value={tbody.Status} onChange={(e) => handleChange("Status", row, e)}>
                            <option value="closed">Closed</option>
                            <option value="open">Open</option>
                        </select>
                    </td>
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
                <button className='updateBtn' onClick={() => handleBtn()}>Update</button>
            }
            <Modal
                modalWidth="sm"
                dividers={false}
                showModal={isModal}
                heading={`Review ${clickedSkill.skill}`}
                handleClose={() => {
                    setModal(false);
                }}
                noHeader={false}
            >
                <ReviewTracker 
                    onClose={() =>setModal(false)}
                    skillDetails={clickedSkill}
                />
            </Modal>
        </div>
    )
};

export default SkilledTable;