import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Select from 'react-select';
import { options } from '../models/hiringManager';
import SkilledTable from '../views/components/skilledTable';
import {fetchHiringManagers} from '../middleware/sampleAPI';
import './App.scss';

export default function App() {
  const [manager, setManager] = useState(null);
  const dispatch = useDispatch();
  const managers = useSelector((state) => state.exampleReducer.managers);

  useEffect(() => {
    dispatch(fetchHiringManagers());
  }, []);

  const handleChange = (event) => {
    if(event !== null)
      setManager(event.label);
    else
      setManager(null)
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
            options={managers}
            isClearable={true}
            placeholder="Select Hiring Manager"
            onChange={(e) => handleChange(e)}
          />
        </div>
      </header>
      {
        manager &&
        <SkilledTable/>
      }
    </>
  );
}