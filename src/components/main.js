import Budget from "./budget";
import Expenses from "./expenses";
import Balance from "./balance";
import Categories from "./categories";

import '../styles/utils.css';
import '../styles/main.css'

export default function Main() {
    return (
        <div className="main">
            <div className="left-side">
                <Budget/>
                <Expenses/>
            </div>

            <div className="right-side">
                <Balance/>
                <Categories/>
            </div>
        </div>
    )
}
