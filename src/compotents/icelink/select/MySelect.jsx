import React from 'react';
import './select.css'

const MySelect = ({options,defaultValue,value,onChange}) => {
    return (
        <select value={value} onChange={event => onChange(event.target.value)} className='select'>
            <option disabled value="">{defaultValue}</option>
            {options.map(option =>
            <option key={option.value}  value={option.value}>
                {option.name}
            </option>)}

        </select>
    );
};

export default MySelect;