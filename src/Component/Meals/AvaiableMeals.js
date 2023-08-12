import MealItem from "./MealList/MealList";
import classes from "./AvaiableMeals.module.css";
 
//This has the available meals list
const DUMMY_MEALS = [
    {
      id: "m1",
      name: "Submarine",
      description: "Deviled Chicken Submarine",
      price: 22.99,
    },
    {
      id: "m2",
      name: "Fried chicken",
      description: "Special crispy chicken.",
      price: 16.5,
    },
    {
      id: "m3",
      name: "Burger",
      description: "American, raw, meaty",
      price: 12.99,
    },
    {
      id: "m4",
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
    },
  ]
  
  const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => (
        <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    ))
  
    return (
      <section className={classes.meals}>
        
            <ul>{mealsList}</ul>

      </section>
    );
  };
  
  export default AvailableMeals;
  
