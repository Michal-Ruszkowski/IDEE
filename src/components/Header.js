import React from 'react';
import { Link, NavLink, Route } from 'react-router-dom';

const leftList =[
    {name: "Buy", path:"/Buy"},
    {name: "Sell", path:"/Sell"},
    {name: "About", path:"/About"},
]
const  rightList = [
    {name: "Register", path:"Register"},
    {name: "Login", path:"/Login"},
]

const Header = () => {
    const leftMenu = leftList.map(item => (
        <li key={item.name}>
            <NavLink className="navlink" to={item.path} exact={item.exact}>{item.name}</NavLink>
        </li>
    ))
    const rightMenu = rightList.map(item => (
        <li key={item.name}>
            <NavLink className="navlink" to={item.path} exact={item.exact}>{item.name}</NavLink>
        </li>
    ))

    return (
        <header>
            <nav>
                <ul className="leftMenu">
                    {leftMenu}
                </ul>
                <ul>
                    {rightMenu}
                </ul>
            </nav>
            <section>
                <Route path="/" render={(props) =>{
                    return(
                        <p>
                        <Link to="/">Home</Link> {props.location.pathname}
                        </p>
                    )
                }
                }/>
            </section>
        </header>
    );
}

export default Header;