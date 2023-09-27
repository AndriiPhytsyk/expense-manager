import * as React from 'react';
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    LinearProgress,
    TextField
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

import '../styles/categories.css';
import '../styles/utils.css';
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "orange",
    "pink",
    "brown",
    "teal",
    "gray"
];


export default function Categories({categories, onCategoryAdd}) {

    const [openDialog, setOpenDialog] = React.useState(false);
    const [categoryForm, setCategoryForm] = React.useState({title: '', budgetLimit: 0, indicatorColor: 'orange'})


    const handleChange=(e, type) => {
        setCategoryForm({...categoryForm, [type]: e.target.value})
    }



    const handleClose = () => {
        setOpenDialog(false);
    };

    const handleCancel = () => {
        setOpenDialog(false);
    };

    const handleAdd = () => {
        onCategoryAdd(categoryForm);
        setCategoryForm({title: '', budgetLimit: 0, indicatorColor: ''});
        setOpenDialog(false);
    };

    const handleClickOpen = () => {
        setOpenDialog(true);
    };

    return (
        <div className="categories">
            <h2>Categories</h2>
            <p>Set the budget limit for each category expanses</p>
            <ul className="categories-items">
                {categories.map((category) => {return (
                <li className="item">
                    <span  style={{backgroundColor: category.indicatorColor}} className="indicator mr-10"></span>
                    <div className="d-flex column mr-20 w-50">
                        <p className="title mb-10">{category.title}</p>
                        <Box className="mb-10">
                            <LinearProgress variant="determinate" value={(category.spent / category.budgetLimit) * 100}/>
                        </Box>
                        <span className="spent font-11">Spent {category.spent}</span>
                    </div>
                    <div className="mr-30 w-20">
                        <TextField value={category.budgetLimit} id="outlined-basic" variant="outlined"/>
                        <p  className="font-11">Budget limit</p>
                    </div>
                    <div className="actions">
                        <Grid item xs={8}>
                            <DeleteIcon className="pointer"/>
                        </Grid>
                    </div>
                </li>
                )})}
            </ul>

            <Button onClick={handleClickOpen} variant="outlined">Add category</Button>

            <Dialog open={openDialog} onClose={handleClose}>
                <DialogTitle>Add Category</DialogTitle>
                <DialogContent>
                    <div className="d-flex">
                        <div className="mr-10">
                            <TextField onChange={(e) => handleChange(e, 'title')} value={categoryForm.title} id="outlined-basic" label="Title" variant="outlined"/>
                        </div>
                        <div className="mr-10">
                            <TextField onChange={(e) => handleChange(e, 'budgetLimit')} value={categoryForm.budgetLimit} id="outlined-basic" label="Budget limit" variant="outlined" />
                        </div>
                        <div>
                            <FormControl sx={{ minWidth: 100 }}>
                                <InputLabel id="demo-simple-select-label">Colors</InputLabel>
                                <Select
                                    labelId="colors"
                                    id="demo-simple-select"
                                    value={categoryForm.indicatorColor}
                                    label="Age"
                                    onChange={(e) => handleChange(e, 'indicatorColor')}
                                >
                                    {colors.map((color) => {
                                        return (
                                            <MenuItem value={color}>{color}</MenuItem>
                                        )
                                    })}
                                </Select>
                            </FormControl>

                        </div>

                    </div>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleAdd}>Add</Button>
                    <Button onClick={handleCancel}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
)
}
