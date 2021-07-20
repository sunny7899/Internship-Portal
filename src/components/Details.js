import '../styles/Details.scss';
import { useState } from 'react';
import DisabledStar from '../Assets/Disabled star.svg';
import ActiveStar from '../Assets/active star.svg';
import LocationIcon from '../Assets/location.svg';
import CompensationIcon from '../Assets/salary.svg';
import DurationIcon from '../Assets/duration.svg';
import PostedOnIcon from '../Assets/posted on.svg';
import CloseBlackIcon from '../Assets/X black.svg';
import ShareIcon from '../Assets/Share.svg';
import SaveIcon from '../Assets/Save.svg';


const Details = ({...props}) => {

    const screenWidth = window.screen.width;
    const [summaryView, setSummaryView] = useState(screenWidth < 992); 

    const { data } = props;
    // Create nodes to render rating UI
    const ratingNodes = [];
    for (let i = 0; i < 5; i++) {
        if (i < data.rating) {
            ratingNodes.push(<img src={ActiveStar} alt='active rating' key={i+1}/>);
        } else {
            ratingNodes.push(<img src={DisabledStar} alt='disabled rating' key={i+1}/>);
        }
    }
  
    const requestClose = (e) => {
        e.preventDefault();
        props.closeDetail();
    }

    const openDetailView = (e) => {
        e.preventDefault();
        setSummaryView(false);
    }

    return (
        <div className={`Details-wrap ${summaryView ? 'Summary' : ''}`}>
            <div className='Detail-content'>
                <img className='Logo' src={data.logoKey} alt={data.companyName}/>
                <div className='Title'>{data.jobName}</div>
                <div className='Item'>{data.companyName}</div>
                <div className='Item' style={{ 'marginBottom': '8px' }}>{ratingNodes}</div>
                <div className='Item'>
                <img src={LocationIcon} alt='location'/>
                {data.location}
                </div>
                <div className='Item'>
                    <span><img src={CompensationIcon} alt='compensation'/>{data.compensation}</span>
                    <span><img src={DurationIcon} alt='duration'/>{ data.duration}</span>
                    <span><img src={PostedOnIcon} alt='posted on'/>{ data.postedOn }</span>
                </div>
                <div className='About'>
                    <div className='Title'>About the company</div>
                    <div className='Desc'>{data.aboutCompany}</div>
                    <div className='Title'>About the internship</div>
                    <ul className='Desc List'>
                        {
                            data.aboutIntership.map((about, index) => {
                                return <li key={index}>{ about }</li>
                            })
                        }
                    </ul>
                    <div className='Title'>Skills Required</div>
                    {
                        data.skills.map((skill, index) => {
                            return <span className='Skills' key={index}>{ skill }</span>
                        })
                    }
                </div>
            </div>
            <div className='Detail-footer'>
            {
                screenWidth < 992 ? 
                    <div className='Footer-wrap'>
                        <div className='Save-share'>
                            <img src={SaveIcon} alt='save' style={{ 'marginRight': '24px' }}/>
                            <img src={ShareIcon} alt='share'/>
                        </div>
                        {
                            summaryView ? <button onClick={openDetailView}>View Detail</button> : <button onClick={requestClose}>Apply now</button>
                        }
                    </div> : <div className='Footer-wrap'><button onClick={requestClose}>Apply now</button></div>
                    
            }
            </div>
            {/* Note :- Icon is not in correct shape */}
            <img src={CloseBlackIcon} alt='close' className='Close' onClick={requestClose}/>
        </div>
    );
}

export default Details;