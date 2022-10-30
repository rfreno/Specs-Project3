import React from "react";
import { Link } from "react-router-dom";

import classes from './Header.module.css'

const Header = () => {
  return (
    <header>
      <h2 className={classes.main}>Bek's Eatery</h2>
      <nav className={classes.navLink}>
        <Link to="">
          <button className={classes.btn}>Home</button>
        </Link>
        <Link to="/newRecipe">
          <button className={classes.btn}>Add Recipe</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
