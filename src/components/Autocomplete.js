import '../styles/Autocomplete.scss';
import React, { useState } from 'react';
import { ReactComponent as SearchLogo} from '../Assets/Search.svg';

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

  return (
    <div className={`Autocomplete ${behave === 'dropdown' ? ' Dropdown' : ''}`} style={{ zIndex: `${index ? index : 1}` }}>
      <input className={`Input ${behave === 'dropdown' ? ' Border' : ''}`}  type='search' placeholder={props.placeholder} value={selection} onChange={updateOptions} />
      {
        behave === 'searchbar' ? <button className='Button'><SearchLogo  className='Seach-logo'/></button> : null
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