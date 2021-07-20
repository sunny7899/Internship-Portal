import '../styles/Card.scss';
import DisabledStar from '../Assets/Disabled star.svg';
import ActiveStar from '../Assets/active star.svg';
import LocationIcon from '../Assets/location.svg';
import CompensationIcon from '../Assets/salary.svg';
import DurationIcon from '../Assets/duration.svg';
import PostedOnIcon from '../Assets/posted on.svg';
import ShareIcon from '../Assets/Share.svg';
import SaveIcon from '../Assets/Save.svg';
import ChevronRightIcon from '../Assets/chevron-right.svg';

const Card = ({...props}) => {
  
  const { data, highlight } = props;

  // Create nodes to render rating UI
  const ratingNodes = [];
  for (let i = 0; i < 5; i++) {
      if (i < data.rating) {
          ratingNodes.push(<img src={ActiveStar} alt='active rating' key={i+1}/>);
      } else {
          ratingNodes.push(<img src={DisabledStar} alt='disabled rating' key={i+1}/>);
      }
  }
  

  return (
    <div className={ `Card ${highlight ? 'Active' : ''}` }>
        <img className='Logo' src={data.logoKey} alt={data.companyName}/>
        <div className='Title Item'>{data.jobName}</div>
        <div className='Item'>{data.companyName}</div>
        <div className='Item' style={{ 'marginBottom': '8px' }}>{ratingNodes}</div>
        <div className='Item'>
          <img src={LocationIcon} alt='location'/>
          {data.location}
        </div>
        <div className='Item'>
          <span><img src={CompensationIcon} alt='compensation'/>{data.compensation}</span>
          <span><img src={DurationIcon} alt='duration'/>{ data.duration}</span>
        </div>
        <div className='Item'><img src={PostedOnIcon} alt='posted on'/>{ data.postedOn }</div>
        <div className='Card-bottom'>
          <div className='Save-share'>
            <img src={SaveIcon} alt='save' style={{ 'marginRight': '24px' }}/>
            <img src={ShareIcon} alt='share'/>
          </div>
          <div className='View-Detail' onClick={ (e) => { e.preventDefault(); props.requestOpen(data.jobID) }}>
            View Details
            <img src={ChevronRightIcon} alt='cheveron right' />
          </div>
        </div>
    </div>
  );
}

export default Card;