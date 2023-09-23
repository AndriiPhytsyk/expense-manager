import * as React from 'react';
import {Button, TextField} from "@mui/material";
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import '../styles/utils.css';
import '../styles/budget.css'


export default function Budget() {

    return (
        <div className="budget">
            <div className="desc">
                <h2 className="title">Budget <span>3000 &#x24;</span></h2>
                <span>Add or edit or budget</span>
            </div>
            <div className="budget-form">
                <div className="mr-10">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker  views={['year', 'month']}
                                         label="Year and Month" />
                    </LocalizationProvider>
                </div>
                <div className="mr-10">
                    <TextField className="mr-10" id="outlined-basic" label="Outlined" variant="outlined"/>
                </div>
                <div>
                    <Button variant="contained">Save</Button>
                </div>
            </div>

        </div>

    )
}
