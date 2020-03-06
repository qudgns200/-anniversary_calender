import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "bulma"


function Header() {
    const [onMenu, setOnMenu] = useState("Anniversary");

    function isActive(e) {
        setOnMenu(e.target.name)
    }

    return (
        <div class="tabs is-toggle is-fullwidth is-large">
            <ul>
                <li className={onMenu==="Anniversary"?'is-active':''} onClick={isActive}>
                    <Link to="/Anniversary" name="Anniversary">Anniversary</Link>
                </li>
                <li className={onMenu==="Add"?'is-active':''} onClick={isActive}>
                    <Link to="/Add" name="Add">Add</Link>
                </li>
                <li className={onMenu==="Modify"?'is-active':''} onClick={isActive}>
                    <Link to="/Modify" name="Modify">Modify</Link>
                </li>
                <li className={onMenu==="Delete"?'is-active':''} onClick={isActive}>
                    <Link to="/Delete" name="Delete">Delete</Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;