import React from 'react';

const Weather = (props) => (
  <div className='detail-block'>
    { 
      props.getDetails.country && <p>
        <span className='detail-block__title'>Location: </span> 
        {props.getDetails.country}, {props.getDetails.region}
      </p> 
    }
    { 
      props.getDetails.temperature && <p>
        <span className='detail-block__title'>Temperature: </span> 
        {props.getDetails.temperature}
      </p> 
    }
    { 
      props.getDetails.weather && <p>
        <span className='detail-block__title'>Weather: </span>
        <div className='detail-block__wrapper'>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          { props.getDetails.weather }
          { props.getDetails.icon && <img className='detail-block__image' src={props.getDetails.icon} /> }
        </div>
      </p> 
    }
    { 
      props.getDetails.humidity && <p>
        <span className='detail-block__title'>Humidity: </span> 
        {props.getDetails.humidity}
      </p> 
    }
    { props.getDetails.error && <h3 className='error-text'>{props.getDetails.error}</h3> }
  </div>
);

export default Weather;