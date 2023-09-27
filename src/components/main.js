import Budget from "./budget";
import Expenses from "./expenses";
import Balance from "./balance";
import Categories from "./categories";
import * as React from 'react';

import '../styles/utils.css';
import '../styles/main.css'
import {getCategories, addCategory} from "../services/categoriesService";

export default function Main() {
    const [categories, setCategories] = React.useState(getCategories());

    const onCategoryAdd = (category) => {
        addCategory({...category, spent: 0});
        setCategories([...getCategories()]);
        console.log(categories);
    }

    return (
        <div className="main">
            <div className="left-side">
                <Budget/>
                <Expenses categories={categories}/>
            </div>

            <div className="right-side">
                <Balance/>
                <Categories onCategoryAdd={onCategoryAdd} categories={categories}/>
            </div>
        </div>
    )
}
