import '../styles/Redpin.scss';
import { ReactComponent as RedPin } from '../Assets/Red pin.svg';
import DisabledStar from '../Assets/Disabled star.svg';
import ActiveStar from '../Assets/active star.svg';


const Redpin = ({...props}) => {

    const pinStyle = {
        transform: `scale(${props.transformVal})`,
        top: props.data.top,
        left: props.data.left
    }
    const info = props.data;

    // Create nodes to render rating UI
    const ratingNodes = [];
    for (let i = 0; i < 5; i++) {
        if (i < info.rating) {
            ratingNodes.push(<img src={ActiveStar} alt='active rating' key={i+1}/>);
        } else {
            ratingNodes.push(<img src={DisabledStar} alt='disabled rating' key={i+1}/>);
        }
    }

    return(
        <div className='Pin' style={pinStyle}>
            <div className='Pin-ctn' onClick={ (e) => { e.preventDefault(); props.highlight(info.jobID) }}>
                <RedPin />
                <img src={info.logoKey} alt='' className='Logo'/>
            </div>
            <div className='Pin-info'>
                <div className='item ttl'>{info.companyName}</div>
                <div className='item role'>{info.jobName}</div>
                <div className='Item'>{ratingNodes}</div>
            </div>
        </div>
    )
}

export default Redpin;