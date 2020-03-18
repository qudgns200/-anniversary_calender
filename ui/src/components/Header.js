import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "bulma"


function Header() {
    const [onMenu, setOnMenu] = useState("anniversary");

    function isActive(e) {
        setOnMenu(e.target.name)
    }

        return (
            <div className="container">
                <div className="tabs is-toggle is-fullwidth is-large">
                    <ul>
                        <li className={onMenu==="anniversary"?'is-active':''} onClick={isActive}>
                            <Link to="/Main/Anniversary" name="anniversary">Anniversary</Link>
                        </li>
                        <li className={onMenu==="add"?'is-active':''} onClick={isActive}>
                            <Link to="/Main/add" name="add">Add</Link>
                        </li>
                        <li className={onMenu==="list"?'is-active':''} onClick={isActive}>
                            <Link to="/Main/list" name="list">List</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
};

export default Header;