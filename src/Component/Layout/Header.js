//This is header file of the app

import { Fragment } from "react";
import mainheaderImage from "../../Assest/headerBanner.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";


const Header = (props) => {
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>Food Odering App</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes["Main-Image"]}>
                <img src={mainheaderImage} alt="A table full of delicious food!!" /> //background image 
            </div>
        </Fragment>
        
    )
}

export default Header;