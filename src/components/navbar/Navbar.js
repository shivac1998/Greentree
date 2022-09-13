import classes from "./navbar.css";
import { Link } from "react-router-dom";
// import { useContext } from "react";
// import FavoritesContext from "../../store/favorites-context";

function Navbar() {
  // const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Greentree</div>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/amenities"}>
              Amenities
              {/* <span className={classes.badge}>
                {favoritesCtx.totalFavorites}
              </span> */}
            </Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>contact</Link>
          </li>
          <li>
            <Link to={"/hometypes"}>hometypes</Link>
          </li>
          <li>
            <Link to={"/surroundingareas"}>surroundingareas</Link>
          </li>
          <li>
            <Link to={"/contact"}>contact</Link>
          </li>
          <li>
            <Link to={"/events"}>Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
