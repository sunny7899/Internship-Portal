import '../styles/FilterView.scss';
import CloseIcon from '../Assets/X.svg';
import Autocomplete from './Autocomplete';
import { useState } from 'react';
import _ from 'lodash';

const locArray = [
  { id: 1, value: '5km', isActive: false },
  { id: 2, value: '10km', isActive: false },
  { id: 3, value: '25km', isActive: false },
  { id: 4, value: '50km', isActive: false },
  { id: 5, value: 'All', isActive: false }
]

const internshipTypeArray = [
  { id: 1, value: 'All', isActive: false },
  { id: 2, value: 'In office', isActive: false },
  { id: 3, value: 'Remote', isActive: false },
  { id: 4, value: 'Part time', isActive: false }
]

const interestArray = [
  { id: 1, name: 'Architecture'},
  { id: 2, name: 'Commerce'},
  { id: 3, name: 'Graphics Design'},
  { id: 4, name: 'Engineering'},
  { id: 5, name: 'Game Development'},
  { id: 6, name: 'Journalism'},
  { id: 7, name: 'Digital Marketing'},
  { id: 8, name: 'Other'}
]

const highlightArray = [
  { id: 1, value: 'Top rated', isActive: false },
  { id: 2, value: 'Startups', isActive: false },
  { id: 3, value: 'High paid', isActive: false },
  { id: 4, value: 'Dream', isActive: false }
]



const Choice = ({...props}) => {

  const [options, setOptions] = useState(props.optionsArray);

  const handleAction = (id) => (e) => {
    let updateArray = _.cloneDeep(props.optionsArray);
    updateArray[updateArray.findIndex(item => id === item.id)].isActive = true;
    setOptions(updateArray);
    console.log(updateArray);
  }

  return (
    <div className='Choices'>
      {
        options.map(option => { 
          return <span className={option.isActive ? 'Active' : '' } key={option.id} onClick={handleAction(option.id)}>{option.value}</span>
        })
      }
    </div>
  )
}

const FilterView = ({...props}) => {

  return (
        <div className='Filter-list'>
          <div className='Filter-content'>
            <div className='Filter-ctn'>
              <img className='Cancel' src={CloseIcon} alt='close' onClick={props.requestClose}/>
              <div className='Head'>Filters</div>
              <div className='Item'>
                <div className='Sub-head'>Location</div>
                <Choice optionsArray={locArray}/>
              </div>
              <div className='Item'>
                <div className='Sub-head'>Type of internships</div>
                <Choice optionsArray={internshipTypeArray}/>
              </div>
              <div className='Item'>
                <div className='Sub-head'>Field of interest</div>
                <Autocomplete searchList={interestArray} behave='dropdown' index='3'/>
                <Autocomplete searchList={interestArray} behave='dropdown' index='2'/>
                <Autocomplete searchList={interestArray} behave='dropdown' index='1'/>
              </div>
              <div className='Item'>
                <div className='Sub-head'>Highlights</div>
                <Choice optionsArray={highlightArray}/>
              </div>
            </div>
          </div>
          <div className='Filter-footer'>
            <div className='Footer-wrap'>
              <button className='Btn-clr' onClick={props.requestClose}>Clear all</button>
              <button className='Btn-aply' onClick={props.requestClose}>Apply Filters</button>
            </div>
          </div>
        </div>
  );
}

export default FilterView;