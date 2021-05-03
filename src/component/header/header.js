import { NavLink } from "react-router-dom"
import classes from './header.css';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'


const Header = () => {
    return(
        <div className = "container">
             {/* <header className="header">
            <div className="input-before"></div>
            <input
                id="search-bar"
                type="text"
                className="search-bar"
                placeholder="Search..."
            />
            <div className="input-after" > */}
                {/* <i class="fa fa-search search-icon" aria-hidden="true"></i> */}
{/*                 
            </div>
        </header> */}
        <ul className = "list">
            <li className = "item"><NavLink activeClassName = {classes.active} className = "link" to="/home">Home</NavLink></li>
            <li className = "item"><NavLink activeClassName = {classes.active} className = "link" to="/portfolio">Portfolio</NavLink></li>
            <li className = "item"><NavLink activeClassName = {classes.active} className = "link" to="/contact">Contact</NavLink></li>
        </ul>
        </div>
        
    )
}
export default Header;