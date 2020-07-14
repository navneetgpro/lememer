import React from 'react';
import { Route, NavLink } from "react-router-dom";

const Footer = props => {
    return (
        <>
            <div className="circle-div">
                <NavLink exact to="/upload"><i className="fa fa-upload"></i></NavLink>
            </div>
            <footer>
                <nav>
                    <ul className="footmenu">
                        <ListItemLink to="/" icon="home" />
                        <ListItemLink to="/hashtag" icon="hashtag" />
                        <ListItemLink to="/profile" icon="user" />
                    </ul>
                </nav>
            </footer>
        </>
    )
}
const ListItemLink = ({ to, icon, ...rest }) => {
    return (
        <Route exact path={to}
            children={({ match }) => (
                <li className={match ? "active" : ""}>
                    <NavLink activeClassName='' to={to} {...rest} ><i className={"fa fa-" + icon}></i></NavLink>
                </li >
            )}
        />
    );
}

export default Footer;
