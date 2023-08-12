import { Fragment } from "react";
import AvailableMeals from "./AvaiableMeals";
import MealsSummary from "./MealSummary";

const Meals = () => {
    return(
        <Fragment>
            
            <MealsSummary/>
            <AvailableMeals/>
            
        </Fragment>
    )
}

export default Meals;