import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Button, Grid, TextField} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import '../styles/utils.css';
import '../styles/expenses.css';


export default function Expenses({categories}) {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    // useEffect(() => {
    //     // This gets called after every render, by default
    //     // (the first one, and every one after that)
    //     console.log(categories);
    // })

    return (
        <div className="expenses">
            <h3>Add expenses:</h3>
            <div className="d-flex">
                <div className="mr-10">
                    <TextField id="asd" label="Outlined" variant="outlined"/>
                </div>
                <div className="mr-10">
                    <TextField id="sd" label="Outlined" variant="outlined"/>
                </div>
                <div className="category-select">
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                        <Select
                            labelId="category"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                        >
                            {categories.map((category, index) => {
                                return (
                                    <MenuItem key={index} value={category.title}>{category.title}</MenuItem>
                                )
                            })}
                        </Select>
                    </FormControl>
                </div>
            </div>
            <div className="action-button">
                <Button variant="contained">Submit</Button>
            </div>
            <div className="expanses-balance">

                <h3>Expanses balance: 7$</h3>
                <ul className="expanse-items">
                    <li className="item">
                        <span className="font-11"> 15 of March</span>
                        <div className="d-flex align-center">
                            <div className="info">
                                <div className="expanse">100</div>
                                <div className="spent">Starbacks</div>
                                <span className="indicator"></span>

                            </div>
                            <div className="actions">
                                <Grid item xs={8} className="mr-10">
                                    <EditIcon className="pointer"/>
                                </Grid>
                                <Grid item xs={8}>
                                    <DeleteIcon className="pointer"/>
                                </Grid>
                            </div>
                        </div>


                    </li>
                </ul>
            </div>
        </div>

    )
}
