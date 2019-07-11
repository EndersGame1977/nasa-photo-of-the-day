import React from 'react';

function DatePicker(props) {

    return (
        <div>
            <input 
                onChange={e => props.datePicker(e.target.value)}
                type="date"
            />
        </div>
      );
}

export default DatePicker;