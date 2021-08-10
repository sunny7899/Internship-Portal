import '../styles/Autocomplete.scss';
import React, { useState } from 'react';
import { ReactComponent as SearchLogo} from '../Assets/Search.svg';
import { ReactComponent as CrossLogo } from '../Assets/X.svg';

const Autocomplete = ({...props}) => {

  const { behave } = props;
  const { index } = props;
  const [options, setOptions] = useState(props.searchList);
  const [selection, setSelection] = useState('');

  const updateOptions = (e) => {
    setSelection(e.target.value);
    const filterOptions = props.searchList.filter(list => list.name.toLowerCase().includes(e.target.value.toLowerCase()));
    setOptions(filterOptions);
  }

  const updateSelection = (e) => {
    e.preventDefault();
    setSelection(e.target.innerText);
  }

  const resetSelection = (e) => {
    e.preventDefault();
    setSelection('');
  }

  return (
    <div className={`Autocomplete ${behave === 'dropdown' ? ' Dropdown' : ''}`} style={{ zIndex: `${index ? index : 1}` }}>
      <input className={`Input ${behave === 'dropdown' ? ' Border' : ''}`}  type='text' placeholder={props.placeholder} value={selection} onChange={updateOptions} />
      {
        selection ? <CrossLogo className='Input-Cross' onClick={resetSelection}/> : null
      }
      {
        behave === 'searchbar' ? <button className='Button'><SearchLogo className='Seach-logo'/></button> : null
      }
      <ul className='Options-list'>
        {
          options.map(city => {
            return <li className='Options' key={city.id} onClick={updateSelection}>{city.name}</li>
          })
        }
      </ul>
    </div>
  );
}

export default Autocomplete;