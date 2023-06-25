import React, { useState } from 'react'
import DatePicker from 'react-multi-date-picker';
import DatePanel from 'react-multi-date-picker/plugins/date_panel';
import 'react-multi-date-picker/styles/colors/red.css';

export default function DateCalendar({ selectedDates, setSelectedDates }) {

    const handleDateChange = (date) => {
        const formattedDates = date?.map(date => date?.format("DD/MMM/YYYY"));
        if (date.length <= 2) {
            setSelectedDates(formattedDates);
        } else {
            // If more than two dates are selected, retain the first two selected dates
            const updatedDates = [...date];
            updatedDates.pop(); // Remove the last selected date
            setSelectedDates(updatedDates);
        }
    };
    return (
        <div                /*  className="btn btn-primary" */
        >
            <DatePicker
                value={selectedDates}
                onChange={handleDateChange}
                format="DD/MMM/YYYY"
                sort
                plugins={[
                    <DatePanel />
                ]}
                placeholder="Select Dates"
            />
        </div>
    )
}
