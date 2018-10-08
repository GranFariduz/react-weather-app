import React from 'react';

const Form = (props) => (
  <div>
    <form className='input-block' onSubmit={props.getWeather}>
      <input className='input-block__city' name='city' type='text' placeholder='Enter the city' />
      <button className='input-block__button'>FIND</button>
    </form>
  </div>
);

export default Form;