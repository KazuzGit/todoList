import React from 'react'
import UserList from "./User";

function NavbarItem({name, href}) {
    return (
        <li className="nav-item active">
          <a className="nav-link" to={href}>{name}</a>
        </li>
    )
}


export default function Navbar({navbarItems}) {
    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a className="navbar-brand" href="#">Home</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  {navbarItems.map((item) => <NavbarItem name={item.name} href={item.href} />)}
                </li>
             </ul>
            </div>
          </nav>
    )
}