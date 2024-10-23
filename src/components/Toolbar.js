import React from 'react';
import '../styles/Toolbar.scss';
import Autocomplete from './Autocomplete';
import { ReactComponent as FilterLogo } from '../Assets/filter.svg';

const metroList = [
  { id: 1, name: 'Delhi' },
  { id: 2, name: 'Mumbai' },
  { id: 3, name: 'Kolkata' },
  { id: 4, name: 'Chennai' },
  { id: 5, name: 'Hyderabad' },
  { id: 6, name: 'Bangalore' },
  { id: 7, name: 'Pune' },
  { id: 8, name: 'Ahmedabad' },
  { id: 9, name: 'Lucknow' },
  { id: 10, name: 'Agra' }
]

const Toolbar = ({...props}) => {
  return (
    <header className='Toolbar'>
      <div className='Topbar'></div>
      <div className='Searchbar'>
        <Autocomplete placeholder='Search nearby' searchList={metroList} behave={'searchbar'}/>
        <div className='Filters'>
          <button className='Filter-btn' onClick={props.openFilter}><FilterLogo className='Filter-icon'/>Filters</button>
        </div>
      </div>
    </header>
  );
}

export default Toolbar;