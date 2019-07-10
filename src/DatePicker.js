import React, { useState } from 'react';

function DatePicker() {
const [date, setDate] = useState('');
console.log(date);
    return (
        <div>
            <input 
                onChange={e => setDate(e.target.value)}
                value={date}
                type="date"

            />
        </div>
      );
}

export default DatePicker;