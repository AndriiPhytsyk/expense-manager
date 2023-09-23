import * as PropTypes from "prop-types";
import {Box, Button, Grid, LinearProgress, TextField} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

import '../styles/categories.css'
import '../styles/utils.css'

const categories = [
    {category: 'Education', spent: '200', budgetLimit: '500'}
]

function LinearProgressWithLabel(props) {
    return null;
}

LinearProgressWithLabel.propTypes = {value: PropTypes.any};

export default function Categories() {
    return (
        <div className="categories">
            <h2>Categories</h2>
            <p>Set the budget limit for each category expanses</p>
            <ul className="categories-items">
                <li className="item">
                    <span className="indicator mr-10"></span>
                    <div className="d-flex column mr-20 w-50">
                        <p className="title mb-10">Education</p>
                        <Box className="mb-10">
                            <LinearProgress variant="determinate" value={10} />
                        </Box>
                        <span className="spent font-11">Spent 1000</span>
                    </div>
                    <div className="mr-30 w-20">
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                        <p className="font-11">Budget limit</p>
                    </div>
                    <div className="actions">
                        <Grid item xs={8}>
                            <DeleteIcon  className="pointer"/>
                        </Grid>
                    </div>
                </li>
            </ul>

            <Button variant="outlined">Add category</Button>
        </div>
    )
}
