import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Select from 'react-select';
import SkilledTable from './components/skilledTable/skilledTable';
import { fetchHiringManagers, fetchSkills } from '../middleware/sampleAPI';
import { getSkillsAction } from '../stores/sampleReducer/action'; 
import './App.scss';

export default function App() {
  const dispatch = useDispatch();
  const managersData = useSelector((state) => state.exampleReducer.managers);
  const skillsData = useSelector((state) => state.exampleReducer.skills);

  useEffect(() => {
    dispatch(fetchHiringManagers());
  }, []);

  const handleChange = (event) => {
    if(event !== null) {
      dispatch(fetchSkills(event.id));
    }
    else {
      dispatch(getSkillsAction([]));
    }
  }

  return (
    <>
      <div className='header-social'></div>
      <header className='logo'>
        <div>
          <a href="https://primeramed.com">
            <img src="https://primeramed.com/wp-content/uploads/2016/12/Logo-for-Website.png" alt="PrimEra" />
          </a>
        </div>
        <div className='hiringManager'>
          <Select 
            options={managersData}
            isClearable={true}
            placeholder="Select Hiring Manager"
            onChange={(e) => handleChange(e)}
          />
        </div>
      </header>
      {
        (skillsData && skillsData.length !== 0) &&
        <SkilledTable
          skillsData = {skillsData}
        />
      }
    </>
  );
}